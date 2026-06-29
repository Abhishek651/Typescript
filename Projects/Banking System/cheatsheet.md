# Cheatsheet

## Classes

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");
dog.speak();
```

## Access Modifiers

```ts
class BankAccount {
  private balance: number;    // only accessible inside the class
  public owner: string;       // accessible everywhere
  readonly id: number;        // can't be changed after construction

  constructor(owner: string, id: number) {
    this.owner = owner;
    this.id = id;
    this.balance = 0;
  }
}
```

## Interfaces & implements

```ts
interface IAnimal {
  name: string;
  speak(): void;
}

class Dog implements IAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log("Woof!");
  }
}
```

> `implements` forces the class to fulfill the interface contract. TypeScript will error if any method or property is missing.

## Enums

```ts
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right,  // 3
}

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

let move: Direction = Direction.Up;
let s: Status = Status.Active;
```

## Tuples

```ts
// A fixed-length array where each position has a known type
let result: [boolean, string] = [true, "Operation successful"];

const [success, message] = result;  // destructuring
console.log(success);   // true
console.log(message);   // "Operation successful"
```

## Union Types

```ts
let id: string | number;
id = 1;       // valid
id = "abc";   // valid

function printId(id: string | number): void {
  console.log(id);
}
```

## Type Narrowing

```ts
function process(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());   // string methods available
  } else {
    console.log(value.toFixed(2));      // number methods available
  }
}
```

## try / catch

```ts
function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

try {
  const result = divide(10, 0);
} catch (err) {
  console.log("Error:", (err as Error).message);
}
```

## Type Assertion

```ts
// Tell TypeScript "trust me, I know the type"
const input = document.getElementById("name") as HTMLInputElement;

// In catch blocks, err is typed as `unknown` — assert to use .message
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log((err as Error).message);
}
```

> Prefer `as Error` over `any` in catch blocks for safer error handling.
