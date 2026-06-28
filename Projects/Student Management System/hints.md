# Hints

## Step 1 — Model the data

Define an `interface Student` with fields for id, name, and marks. Think about what types each field should be.

---

## Step 2 — Set up storage

Declare a single `Student[]` array at the top of your file. All functions will read from and write to this array.

---

## Step 3 — Add a student

Write an `addStudent` function. It should accept student details, build a `Student` object, and push it into the array. Return type is `void`.

---

## Step 4 — Remove a student

Use `array.filter()` to return a new array without the target student. Reassign the storage array.

---

## Step 5 — Update a student

Use `findIndex()` to locate the student, then update only the fields that were passed in. Hint: the update parameter doesn't need all fields — think optional properties.

---

## Step 6 — Display & calculate

- `listStudents()` — loop and `console.log` each student
- `averageMarks()` — use `reduce()` to sum marks, divide by length

---

## Step 7 — Wire it up

At the bottom of `index.ts`, call your functions with test data to verify everything works.
