# Hints

## Step 1 — Model the data

Define an `interface IBankAccount` with method signatures for deposit, withdraw, and transfer. Think about what each method should accept and return.

---

## Step 2 — Define your Enums

Create an `AccountType` enum (e.g. `Savings`, `Checking`) and a `TransactionType` enum (e.g. `Deposit`, `Withdrawal`, `Transfer`). Use these instead of raw strings throughout your code.

---

## Step 3 — Build the class

Create a `BankAccount` class that `implements IBankAccount`. Store `accountId`, `owner`, `balance`, `accountType`, and a `transactions` tuple array as private fields. Initialize them in the `constructor`.

---

## Step 4 — Deposit

Write a `deposit(amount: number)` method. Wrap it in `try/catch` — throw an error if `amount <= 0`. On success, push a tuple `[TransactionType.Deposit, amount]` into the transactions array and return `[true, "Deposit successful"]`.

---

## Step 5 — Withdraw

Write a `withdraw(amount: number)` method. Throw an error if `amount > balance` (overdraft) or if `amount <= 0`. On success, deduct from balance, log the transaction, and return a success tuple.

---

## Step 6 — Transfer

Write a `transfer(amount: number, target: BankAccount)` method. Reuse `this.withdraw()` and `target.deposit()` inside a `try/catch`. If either throws, catch the error, assert it `as Error`, and return `[false, error.message]`.

---

## Step 7 — Display

- `getDetails()` — log `accountId`, `owner`, `accountType`, and `balance`
- `getHistory()` — loop and log each tuple in the `transactions` array

---

## Step 8 — Wire it up

At the bottom of `index.ts`, create 2–3 `BankAccount` instances and call deposit, withdraw, transfer, and display methods to verify everything works.
