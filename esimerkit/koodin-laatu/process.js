async function fn(c, p, d) {
  console.log("Processing " + c.name);

  let x = 0;

  for (let i = 0; i < p.length; i++) {
    x += p[i].price * p[i].quantity;
  }

  if (c.type === "MEMBER") {
    x = x * 0.9;
  } else if (u.type === "VIP") {
    x = x * 0.75;
  }

  if (d > 0) {
    x = x - d;
  }

  x = x + calculateShipping(p);

  await fetch("https://onlinestore.com/api/receipts", {
    method: "POST",
    body: JSON.stringify({ customerId: u.id, total: x }),
  });

  return x;
}

function calculateShipping(p) {
  let t = 0;

  for (let i = 0; i < p.length; i++) {
    t += p[i].price * p[i].qantity;
  }

  if (t > 100) {
    return 0;
  } else {
    return 10;
  }
}
