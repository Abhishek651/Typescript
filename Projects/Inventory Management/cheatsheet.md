# Inventory Management System TypeScript Cheatsheet

## Dynamic Data & Advanced TypeScript Concepts

### Type Aliases (`type`)

```ts
type Id = string | number;
type Price = number;
type Quantity = number;

let itemId: Id = "INV-001";
let unitPrice: Price = 99.99;
```

### Interfaces (Dynamic with Index Signatures)

```ts
interface InventoryItem {
  readonly id: Id;              // readonly
  name: string;
  price: Price;
  quantity: Quantity;
  email?: string;               // optional
  description?: string;         // optional
}

// Index signature for dynamic properties
interface InventoryMap {
  [key: string]: InventoryItem;
}
```

### Readonly Properties

```ts
interface Product {
  readonly id: number;
  name: string;
}

const product: Product = { id: 1, name: "Laptop" };
product.id = 2;  // Error: Cannot assign to 'id' because it is a readonly property
```

### Partial & Required Types

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

// For updates - all fields optional
function updateUser(id: number, updates: Partial<User>): void;

// For creates - all fields required  
function createUser(user: Required<User>): User;
```

### Record Type (Index Signatures in Action)

```ts
interface Student {
  studentId: number;
  name: string;
  grade: string;
}

// Array-based approach
const students: Student[] = [];

// Record-based approach
const studentsById: Record<string, Student> = {};

// Both can be used together for optimal performance
function addStudent(student: Student): void {
  students.push(student);
  studentsById[student.studentId.toString()] = student;
}
```

### Combining Concepts for Dynamic Management

```ts
interface DynamicItem {
  readonly id: number;
  data: Record<string, string | number | boolean>;
}

const inventory: Record<string, DynamicItem> = {};

function addDynamicItem(id: number, data: Partial<DynamicItem['data']>): void {
  if (inventory[id.toString()]) {
    console.log("Item already exists");
    return;
  }
  inventory[id.toString()] = { id, data: { ...data as Record<string, string | number | boolean> } };
}
```

### Advanced CRUD with Dynamic Types

```ts
export interface InventoryItem {
  readonly id: number;                    // Required & Readonly
  name: string;                           // Required
  price: number;                          // Required
  quantity: number;                       // Required
  description?: string;                   // Optional
  category?: string;                      // Optional
}

// Dynamic key management
export type InventoryIndex = {
  [key: string]: InventoryItem;
};

// Utility types for complex operations
export type UpdateItem = Partial<InventoryItem>;
export type CreateItem = Required<InventoryItem>;
export type OptionalFields = Partial<Pick<InventoryItem, 'description' | 'category'>>;
```

### Dynamic Array Operations

```ts
interface Item {
  id: number;
  name: string;
  value: number;
}

// Map for fast lookup by any property
const itemMap: Record<string, Item[]> = {};

function categorizeItems(items: Item[]): Record<string, Item[]> {
  return items.reduce((acc, item) => {
    const category = item.name[0]; // Example dynamic categorization
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, Item[]>);
}
```

### Dynamic Validation

```ts
function isValidItem(item: Partial<InventoryItem>): item is InventoryItem {
  return (
    item.id !== undefined &&
    item.name !== undefined &&
    item.price !== undefined &&
    item.quantity !== undefined
  );
}

function safeAddItem(item: Partial<InventoryItem>): boolean {
  if (!isValidItem(item)) {
    console.log("Invalid item data");
    return false;
  }
  // Add to inventory...
  return true;
}
```