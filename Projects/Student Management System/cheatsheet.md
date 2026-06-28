# Cheatsheet

## Basic Types

```ts
let name: string = "Alice";
let age: number = 25;
let active: boolean = true;
```

## Type Inference

```ts
let city = "London";   // inferred as string
let score = 100;       // inferred as number
```

## Type Aliases

```ts
type ID = string | number;
type Point = { x: number; y: number };

let userId: ID = 42;
```

## Interfaces

```ts
interface User {
  id: number;
  name: string;
}

// Extending
interface Admin extends User {
  role: string;
}
```

> `type` vs `interface`: prefer `interface` for objects/classes, `type` for unions/primitives.

## Arrays

```ts
let nums: number[] = [1, 2, 3];
let tags: Array<string> = ["ts", "js"];
```

## Functions

```ts
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => `Hello, ${name}`;
```

## Function Return Types

```ts
function getAge(): number { return 30; }
function getUser(): User { return { id: 1, name: "Alice" }; }
```

// explicit
function getCount(): number {
  return students.length;
}

// inferred — TS knows it returns number from context
function getCount() {
  return students.length;
}

## Optional Parameters

```ts
function log(msg: string, prefix?: string): void {
  console.log(prefix ? `${prefix}: ${msg}` : msg);
}
```

## void

```ts
function printMsg(msg: string): void {
  console.log(msg);
  // no return value
}
```

## never

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}

function infinite(): never {
  while (true) {}
}
```

> `never` = function that never returns (throws or infinite loops).

## Object Typing

```ts
// Inline
const user: { name: string; age: number } = { name: "Bob", age: 30 };

// With interface (preferred)
interface Product {
  id: number;
  title: string;
  price?: number;  // optional
}
```
