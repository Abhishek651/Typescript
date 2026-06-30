# Project 3 - Inventory Management System

Build a console-based CRUD application to manage inventory items while practicing the core fundamentals of TypeScript.

## TypeScript Topics

| Topic | Where to Use |
| ----- | ------------ |
| Basic Types (`string`, `number`) | Item fields — `name: string`, `price: number`, `quantity: number` |
| Type Inference | Variables like `totalValue`, `averagePrice`, `index` — let TS infer the type |
| Type Aliases (`type`) | `type Id = string | number` for clarity |
| Interfaces (`interface`) | `interface InventoryItem` to define the item shape |
| Arrays | `InventoryItem[]` to store all items in memory |
| Functions | Each CRUD operation as a standalone typed function |
| Optional Parameters (`?`) | `name?: string`, `price?: number` in `updateItem`, `email?` on Item |
| `void` | `addItem(): void`, `removeItem(): void`, `listItems(): void` |
| Type Narrowing | `InventoryItem \\    undefined` from array access, narrowed with `if (!item)` |
| Duplicate Check | `Array.some()` in `addItem` to prevent duplicate item IDs |
| Index Signatures | `Record<string, Item>` for dynamic key-value pairs |
| Readonly | `readonly` fields for immutable data like `id` |
| Partial | `Partial<InventoryItem>` for update operations |

## Concepts

* CRUD Operations
* Data Modeling
* Function Design
* Array Manipulation
* Dynamic Data Structures

## Workflow

1. Read `statement.md`
2. Implement the solution in `src/`
3. Use `hints.md` only if you're stuck

**Difficulty:** ⭐☆☆☆☆
**Estimated Time:** 45–60 minutes