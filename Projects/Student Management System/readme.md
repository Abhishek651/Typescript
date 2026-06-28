# Project 1 - Student Management System

Build a console-based CRUD application to manage students while practicing the core fundamentals of TypeScript.

## TypeScript Topics

| Topic | Where to Use |
| ----- | ------------ |
| Basic Types (`string`, `number`) | Student fields — `name: string`, `marks: number` |
| Type Inference | Variables like `totalMarks`, `avgMarks`, `index` — let TS infer the type |
| Type Aliases (`type`) | `type Id = number` for clarity |
| Interfaces (`interface`) | `interface Student` to define the student shape |
| Arrays | `Student[]` to store all students in memory |
| Functions | Each CRUD operation as a standalone typed function |
| Optional Parameters (`?`) | `name?: string`, `marks?: number` in `updateStudent`, `email?` on Student |
| `void` | `addStudent(): void`, `removeStudent(): void`, `listStudent(): void` |
| Type Narrowing | `Student \| undefined` from array access, narrowed with `if (!student)` |
| Duplicate Check | `Array.some()` in `addStudent` to prevent duplicate student IDs |




## Concepts

* CRUD Operations
* Data Modeling
* Function Design
* Array Manipulation


## Workflow

1. Read `statement.md`
2. Implement the solution in `src/`
3. Use `hints.md` only if you're stuck

**Difficulty:** ⭐☆☆☆☆
**Estimated Time:** 45–60 minutes
