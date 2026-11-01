# Koodin laadun arviointi ja parantaminen

Tarkastellaan seuraavaa koodiesimerkkiä ja sen laadullisia ongelmia:

- Mitä koodi tekee?
- Mitä laadullisia ongelmia siinä on, esimerkiksi mikä tekee siitä vaikeasti ymmärrettävää, tai ylläpidettävää?
- Miten koodin laatua voisi parantaa?

<details>

<summary>Mitä koodi tekee?</summary>

Koodi käsittelee verkkokaupan tilauksen laskemalla ostosten yhteishinnan (mukaan lukien alennukset ja toimituskulut) ja lähettämällä asiakkaalle kuitin.

</details>

```javascript
async function fn(c, p, d) {
  console.log("Processing " + c.name);

  let x = 0;

  for (let i = 0; i < p.length; i++) {
    x += p[i].price * p[i].quantity;
  }

  if (c.type === "MEMBER") {
    x = x * 0.9;
  } else if (c.type === "VIP") {
    x = x * 0.75;
  }

  if (d > 0) {
    x = x - d;
  }

  x = x + calculateShipping(p);

  await fetch("https://onlinestore.com/api/receipts", {
    method: "POST",
    body: JSON.stringify({ customerId: c.id, total: x }),
  });

  return x;
}

function calculateShipping(p) {
  let t = 0;

  for (let i = 0; i < p.length; i++) {
    t += p[i].price * p[i].quantity;
  }

  if (t > 100) {
    return 0;
  } else {
    return 10;
  }
}
```

## Laadulliset ongelmat

Analysoidaan seuraavaksi koodun laadun ongelmia ja parannetaan koodin laatua ongelmakohtaisesti.

<details>

<summary>Ongelma 1</summary>

### Ongelma 1: Yhden vastuun periaatteen rikkominen

#### Periaate: Yhden vastuun periaate (single responsibility principle)

Funktiolla tulisi olla yksi selkeä vastuu. Sen tulisi keskittyä yhteen tiettyyn tehtävään.

#### Ongelma

`fn`-funktio suorittaa useita erilaisia tehtäviä:

- Laskee tilauksen kokonaishinnan.
- Soveltaa alennukset.
- Lähettää kuitin.

#### Mitä tästä seuraa?

- Funktiota on vaikea ymmärtää ja ylläpitää.
- Yhteen vastuuseen tehdyt muutokset voivat vaikuttaa funktion muihin osiin.
- Yksittäisiä tehtäviä on vaikeampi testata ja käyttää uudelleen.

#### Miten tämä korjataan?

Jaa funktio pienempiin funktioihin, joilla kullakin on selkeä vastuu.

Esimerkiksi:

```javascript
function calculateSubtotal(products) {
  let subtotal = 0;

  for (let i = 0; i < products.length; i++) {
    subtotal += products[i].price * products[i].quantity;
  }

  return subtotal;
}

function applyDiscount(total, customer, discount) {
  let discountedTotal = total;

  if (customer.type === "MEMBER") {
    discountedTotal *= 0.9;
  } else if (customer.type === "VIP") {
    discountedTotal *= 0.75;
  }

  if (discount > 0) {
    discountedTotal -= discount;
  }

  return discountedTotal;
}

function sendReceipt(customer, total) {
  return fetch("https://onlinestore.com/api/receipts", {
    method: "POST",
    body: JSON.stringify({ customerId: customer.id, total }),
  });
}
```

Nyt jokaisella funktiolla on selkeämmin määritelty vastuu.

</details>

<details>

<summary>Ongelma 2</summary>

### Ongelma 2: Huono nimeäminen

#### Periaate: Merkitykselliset ja kuvaavat nimet

Muuttujien ja funktioiden nimien tulisi ilmaista selkeästi niiden tarkoitus.

#### Ongelma

Esimerkissä käytetään epäselviä nimiä:

- `fn` ei kuvaa, mitä funktio tekee.
- `c` ei kerro, mitä tietoja se sisältää.
- `p` ei kerro, mitä tietoja se sisältää.
- `x` ei kerro, mitä arvoa se edustaa.
- `d` ei kerro, millaisesta alennuksesta on kyse.

#### Mitä tästä seuraa?

- Koodia on vaikeampi lukea ja ymmärtää.
- Kehittäjien täytyy käyttää aikaa selvittääkseen, mitä muuttujat edustavat.
- Koodin ylläpito ja virheiden selvittäminen vaikeutuvat.

#### Miten tämä korjataan?

Käytä merkityksellisiä nimiä, jotka kuvaavat funktioiden ja muuttujien tarkoitusta.

Esimerkiksi:

```javascript
function processOrder(customer, products, discount) {
  console.log("Processing " + customer.name);

  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price * products[i].quantity;
  }

  // ...

  return totalPrice;
}
```

Nimet `processOrder`, `customer`, `products`, `discount` ja `totalPrice` kuvaavat koodin tarkoitusta huomattavasti paremmin.

</details>

<details>

<summary>Ongelma 3</summary>

### Ongelma 3: Toistuva koodi

#### Periaate: Älä toista itseäsi (don't repeat yourself, DRY)

Vältä saman logiikan toistamista useassa paikassa. Toteuta yhteinen toiminnallisuus sen sijaan kerran ja käytä sitä uudelleen.

#### Ongelma

Tuotteiden kokonaishinnan laskenta toistuu kahdessa eri funktiossa, `fn`- ja `calculateShipping`-funktiossa. Molemmissa funktioissa on käytännössä sama silmukka.

#### Mitä tästä seuraa?

- Sama koodi on ylläpidettävä useassa paikassa.
- Virheen korjaaminen edellyttää usean toteutuksen päivittämistä.
- Eri toteutukset voivat ajan myötä tuottaa erilaisia tuloksia.

#### Miten tämä korjataan?

Siirrä toistuva laskenta erilliseen funktioon ja käytä sitä uudelleen.

Esimerkiksi:

```javascript
function calculateSubtotal(products) {
  let subtotal = 0;

  for (let i = 0; i < products.length; i++) {
    subtotal += products[i].price * products[i].quantity;
  }

  return subtotal;
}

function processOrder(customer, products, discount) {
  console.log("Processing order for " + customer.name);

  const subtotal = calculateSubtotal(products);
  let totalPrice = subtotal;

  if (customer.type === "MEMBER") {
    totalPrice *= 0.9;
  } else if (customer.type === "VIP") {
    totalPrice *= 0.75;
  }

  if (discount > 0) {
    totalPrice -= discount;
  }

  totalPrice += calculateShipping(products);

  return totalPrice;
}

function calculateShipping(products) {
  const subtotal = calculateSubtotal(products);

  if (subtotal > 100) {
    return 0;
  }

  return 10;
}
```

Nyt hinnan laskenta on toteutettu yhdessä paikassa, ja sitä voidaan käyttää uudelleen tarpeen mukaan.

</details>

<details>

<summary>Ongelma 4</summary>

### Ongelma 4: Taikaluvut (magic numbers)

#### Periaate: Käytä merkityksellisiä vakioita selittämättömien arvojen sijaan

Tärkeille arvoille tulisi antaa kuvaavat nimet, jotka kertovat niiden tarkoituksen.

#### Ongelma

Esimerkissä on useita suoraan koodiin kirjoitettuja numeroita:

- `0.9` tarkoittaa jäsenalennuksen kerrointa.
- `0.75` tarkoittaa VIP-alennuksen kerrointa.
- `100` tarkoittaa rajaa, jonka ylittävistä ostoksista ei veloiteta toimituskuluja.
- `10` tarkoittaa toimituskulua.

Näitä arvoja kutsutaan joskus _taikaluvuiksi_ (magic numbers), koska niiden merkitys ei käy heti ilmi.

#### Mitä tästä seuraa?

- Kehittäjien täytyy ymmärtää ympäröivää koodia selvittääkseen numeroiden merkityksen.
- Liiketoimintasääntöjen muuttaminen edellyttää oikeiden arvojen etsimistä ja päivittämistä.
- Väärän arvon käyttäminen vahingossa on helppoa.

#### Miten tämä korjataan?

Määrittele vakiot kuvaavilla nimillä.

Esimerkiksi:

```javascript
const VIP_DISCOUNT_RATE = 0.25;
const MEMBER_DISCOUNT_RATE = 0.1;
const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 10;

function calculateShipping(subtotal) {
  if (subtotal > FREE_SHIPPING_THRESHOLD) {
    return 0;
  }

  return SHIPPING_COST;
}

function applyCustomerTypeDiscount(total, customerType) {
  let discountRate = 0;

  if (customerType === "MEMBER") {
    discountRate = MEMBER_DISCOUNT_RATE;
  } else if (customerType === "VIP") {
    discountRate = VIP_DISCOUNT_RATE;
  }

  return total * (1 - discountRate);
}
```

Nyt jokaisen arvon merkitys on selvä, ja arvojen muuttaminen on helpompaa.

</details>

<details>

<summary>Refaktoroitu koodi</summary>

Alla olevassa versiossa nimet kuvaavat tarkoitustaan, alennus- ja toimituskululogiikka on erotettu omiin funktioihinsa, toistuva hintalaskenta on poistettu ja lukuarvot on nimetty vakioiksi.

```javascript
const MEMBER_DISCOUNT_RATE = 0.1;
const VIP_DISCOUNT_RATE = 0.25;
const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 10;

function calculateSubtotal(products) {
  let subtotal = 0;

  for (let i = 0; i < products.length; i++) {
    subtotal += products[i].price * products[i].quantity;
  }

  return subtotal;
}

function applyCustomerTypeDiscount(total, customerType) {
  let discountRate = 0;

  if (customerType === "MEMBER") {
    discountRate = MEMBER_DISCOUNT_RATE;
  } else if (customerType === "VIP") {
    discountRate = VIP_DISCOUNT_RATE;
  }

  return total * (1 - discountRate);
}

function calculateShipping(subtotal) {
  return subtotal > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
}

function calculateOrderTotal(products, customerType, additionalDiscount) {
  const subtotal = calculateSubtotal(products);
  const discountedSubtotal = applyCustomerTypeDiscount(subtotal, customerType);
  const totalAfterDiscount = applyAdditionalDiscount(
    discountedSubtotal,
    additionalDiscount,
  );

  return totalAfterDiscount - additionalDiscount + calculateShipping(subtotal);
}

async function sendReceipt(customer, total) {
  await fetch("https://onlinestore.com/api/receipts", {
    method: "POST",
    body: JSON.stringify({ customerId: customer.id, total }),
  });
}

async function processOrder(customer, products, additionalDiscount) {
  console.log("Processing order for " + customer.name);

  const total = calculateOrderTotal(
    products,
    customer.type,
    additionalDiscount,
  );
  await sendReceipt(customer, total);

  return total;
}
```

</details>
