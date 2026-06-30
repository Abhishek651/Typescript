# Hints

## Step 1 — Model the data

Define an `interface InventoryItem` with fields for id, name, price, and quantity. Think about what types each field should be. Use `readonly` for immutable fields like `id`, and consider `optional` fields like `email` or `description`.

---

## Step 2 — Set up storage

Declare a single `InventoryItem[]` array at the top of your file. For dynamic data, also create a `Record<string, InventoryItem>` index signature map. All functions will read from and write to these storage structures.

---

## Step 3 — Add an item

Write an `addItem` function. It should accept item details, build an `InventoryItem` object, and push it into both the array and the record map. Return type is `void`. check for duplicates before adding.

---

## Step 4 — Remove an item

Use `array.filter()` to return a new array without the target item. Also remove from the record map. Reassign both storage structures.

---

## Step 5 — Update an item

Use `findIndex()` to locate the item, then update only the fields that were passed in. Hint: the update parameter doesn't need all fields — think optional properties with `Partial<InventoryItem>`.

---

## Step 6 — Display & calculate

- `listItems()` — loop and `console.log` each item
- `calculateTotalValue()` — use `reduce()` to calculate total inventory value
- `averagePrice()` — calculate average price of items

---

## Step 7 — Dynamic Features

- Use `Record<string, InventoryItem>` for fast lookup by custom keys
- Implement `readonly` properties for immutable identifiers
- Handle optional fields with `?` syntax and `Partial<T>` type

---

## Step 8 — Wire it up

At the bottom of `index.ts`, call your functions with test data to verify everything works.