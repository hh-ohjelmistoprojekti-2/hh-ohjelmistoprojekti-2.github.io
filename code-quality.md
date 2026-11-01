# Code Quality Problems in JavaScript

## Bad example

The following example simulates an online store that processes an order, calculates the total price, applies discounts, and prints a receipt.

The code works, but it contains several code quality problems that make it difficult to understand, maintain, and extend.

```javascript
function doStuff(u, p, d) {
    console.log("Processing order for " + u);

    let x = 0;

    for (let i = 0; i < p.length; i++) {
        x += p[i].price * p[i].quantity;
    }

    if (u === "VIP") {
        x = x * 0.8;
    }

    if (d > 0) {
        x = x - d;
    }

    console.log("Customer: " + u);
    console.log("Total: " + x + " €");

    // Send order confirmation
    console.log("Sending confirmation to " + u);

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

function printOrder(u, p) {
    let total = 0;

    for (let i = 0; i < p.length; i++) {
        total += p[i].price * p[i].quantity;
    }

    console.log("Order for " + u);
    console.log("Total: " + total + " €");
}
```

## Problem 1: Violating the Single Responsibility Principle

**Principle: Single Responsibility Principle (SRP)**

A function should have one clear responsibility. It should focus on doing one particular task.

**Problem:**

The `doStuff()` function performs several different tasks:

- Calculates the order total.
- Applies discounts.
- Prints order information.
- Sends an order confirmation.

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

function applyDiscount(total, customerType, discount) {
    if (customerType === "VIP") {
        total *= 0.8;
    }

    return total - discount;
}

function printReceipt(customer, total) {
    console.log("Customer: " + customer);
    console.log("Total: " + total + " €");
}
```

Now each function has a more clearly defined responsibility.

## Problem 2: Bad Naming

**Principle: Meaningful and descriptive naming**

Variable and function names should clearly communicate their purpose.

**Problem:**

The example uses unclear names:

- `doStuff()` does not describe what the function does.
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
function calculateOrderTotal(products) {
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price * products[i].quantity;
    }

    return totalPrice;
}
```

The names `calculateOrderTotal`, `products`, and `totalPrice` communicate the purpose of the code much better.

## Problem 3: Repeating Code (DRY Principle)

**Principle: Don't Repeat Yourself (DRY)**

Avoid repeating the same logic in multiple places. Instead, implement common functionality once and reuse it.

**Problem:**

The calculation of the total product price is repeated in three different functions:

- `doStuff()`
- `calculateShipping()`
- `printOrder()`

All three functions contain essentially the same loop.

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

function calculateShipping(products) {
    const subtotal = calculateSubtotal(products);

    if (subtotal > 100) {
        return 0;
    }

    return 10;
}

function printOrder(customer, products) {
    const total = calculateSubtotal(products);

    console.log("Order for " + customer);
    console.log("Total: " + total + " €");
}
```

Now the price calculation is implemented in one place and reused whenever needed.

## Problem 4: Magic Numbers

**Principle: Use meaningful constants instead of unexplained values**

Important values should be given descriptive names that explain their purpose.

**Problem:**

The example contains several hardcoded numbers:

- `0.8` represents the VIP discount multiplier.
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
const VIP_DISCOUNT_RATE = 0.20;
const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 10;

function calculateShipping(subtotal) {
    if (subtotal > FREE_SHIPPING_THRESHOLD) {
        return 0;
    }

    return SHIPPING_COST;
}

function applyVipDiscount(total) {
    return total * (1 - VIP_DISCOUNT_RATE);
}
```

Now the meaning of each value is clear, and changing the values is easier.

## Problem 5: Mixing Business Logic and Output

**Principle: Separation of Concerns**

Different parts of a program should focus on different concerns. For example, business logic should be separated from displaying information to the user.

**Problem:**

The `doStuff()` function mixes order calculations with console output.

For example:

```javascript
function doStuff(u, p, d) {
    // Business logic
    let x = 0;

    for (let i = 0; i < p.length; i++) {
        x += p[i].price * p[i].quantity;
    }

    // Output
    console.log("Customer: " + u);
    console.log("Total: " + x + " €");

    return x;
}
```

**What does this cause?**

- Business logic becomes dependent on how information is displayed.
- Reusing the calculation in another context becomes more difficult.
- Changing the output mechanism may require modifying business logic.

**How to fix it?**

Keep calculations separate from displaying information.

For example:

```javascript
function calculateOrderTotal(products) {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
    }

    return total;
}

function printReceipt(customer, total) {
    console.log("Customer: " + customer);
    console.log("Total: " + total + " €");
}
```

The calculation function now returns a value without deciding how it should be displayed. The output function handles displaying the receipt.

---

## Summary

Good code quality makes software easier to understand, maintain, test, and extend.

| Principle | Main idea |
|---|---|
| Single Responsibility Principle | Give each function one clear responsibility. |
| Meaningful Naming | Use descriptive names for variables and functions. |
| Don't Repeat Yourself (DRY) | Avoid implementing the same logic multiple times. |
| Meaningful Constants | Replace unexplained hardcoded values with named constants. |
| Separation of Concerns | Keep different responsibilities, such as business logic and output, separate. |
