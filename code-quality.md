# Code Quality Problems in JavaScript

## Bad example

The following example simulates an online store that processes an order, calculates the total price, applies discounts, and prints a receipt.

The code works, but it contains several code quality problems that make it difficult to understand, maintain, and extend.

```javascript
async function fn(u, p, d) {
    console.log("Processing order for " + u.name);

    let x = 0;

    for (let i = 0; i < p.length; i++) {
        x += p[i].price * p[i].quantity;
    }

    if (u.type === "MEMBER") {
        x = x * 0.9;
    } else if (u.type == "VIP") {
        x = x * 0.75;
    }

    if (d > 0) {
        x = x - d;
    }

    x = x + calculateShipping(p):

await fetch("https://onlinestore.com/api/receipts", { method: "POST", body: JSON.stringify({ customerId: u.id, total: x }) });

   return x;
}

function calculateShipping(p) {
    let total = 0;

    for (let i = 0; i < p.length; i++) {
        total += p[i].price * p[i].quantity;
    }

    if (total > 100) {
        return 0;
    } else {
        return 10;
    }
}
```

## Problem 1: Violating the Single Responsibility Principle

**Principle: Single Responsibility Principle (SRP)**

A function should have one clear responsibility. It should focus on doing one particular task.

**Problem:**

The `fn` function performs several different tasks:

- Calculates the order total.
- Applies discounts.
- Sends the receipt.

**What does this cause?**

- The function becomes difficult to understand and maintain.
- Changes to one responsibility can affect other parts of the function.
- Individual tasks are harder to test and reuse.

**How to fix it?**

Divide the function into smaller functions, each with a clear responsibility.

For example:

```javascript
function calculateOrderTotal(products) {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
    }

    return total;
}

function applyDiscount(total, customer, discount) {
    const discountTotal = total - discount;

    if (customer.type === "MEMBER") {
        discountTotal *= 0.9;
    } else if (customer.type == "VIP") {
        discountTotal *= 0.75;
    }

    return discountTotal;
}

function sendReceipt(customer, total) {
  return fetch("https://onlinestore.com/api/receipts", { method: "POST", body: JSON.stringify({ customerId: customer.id, total }) });
}
```

Now each function has a more clearly defined responsibility.

## Problem 2: Bad Naming

**Principle: Meaningful and descriptive naming**

Variable and function names should clearly communicate their purpose.

**Problem:**

In the example uses unclear names:

- `fn` does not describe what the function does.
- `u` does not explain what information it contains.
- `p` does not explain what information it contains.
- `x` does not explain what value it represents.
- `d` does not explain what kind of discount it represents.

**What does this cause?**

- Code becomes harder to read and understand.
- Developers need to spend time figuring out what variables represent.
- Maintaining and debugging the code becomes more difficult.

**How to fix it?**

Use meaningful names that describe the purpose of functions and variables.

For example:

```javascript
function processOrder(customer, products, discount) {
    console.log("Processing order for " + customer.name);

    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price * products[i].quantity;
    }

    // ...

    return totalPrice;
}
```

The names `processOrder`, `products`, and `totalPrice` communicate the purpose of the code much better.

## Problem 3: Repeating Code (DRY Principle)

**Principle: Don't Repeat Yourself (DRY)**

Avoid repeating the same logic in multiple places. Instead, implement common functionality once and reuse it.

**Problem:**

The calculation of the total product price is repeated in two different functions `fn` and `calculateShipping`. Both functions contain essentially the same loop.

**What does this cause?**

- The same code needs to be maintained in multiple places.
- Fixing a bug requires updating multiple implementations.
- Different implementations may eventually produce different results.

**How to fix it?**

Extract the repeated calculation into a separate function and reuse it.

For example:

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

    let totalPrice = calculateSubTotal(products);

    // ...

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

Now the price calculation is implemented in one place and reused whenever needed.

## Problem 4: Magic Numbers

**Principle: Use meaningful constants instead of unexplained values**

Important values should be given descriptive names that explain their purpose.

**Problem:**

The example contains several hardcoded numbers:

- `0.9` represents the member discount multiplier.
- `0.75` represents the VIP discount multiplier.
- `100` represents the free shipping threshold.
- `10` represents the shipping cost.

These values are sometimes called *magic numbers* because their meaning is not immediately obvious.

**What does this cause?**

- Developers need to understand the surrounding code to figure out what the numbers mean.
- Changing business rules requires finding and updating the correct values.
- It is easy to accidentally use an incorrect value.

**How to fix it?**

Define constants with descriptive names.

For example:

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

Now the meaning of each value is clear, and changing the values is easier.
