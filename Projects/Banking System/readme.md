# Project 2 — Banking System

Build a console-based banking application to manage accounts while practicing OOP and error handling in TypeScript.

## TypeScript Topics

| Topic | Where to Use |
| ----- | ------------ |
| Classes | `BankAccount` class to encapsulate account logic |
| `implements` | `BankAccount implements IBankAccount` to enforce a contract |
| Enums | `AccountType` (Savings, Checking), `TransactionType` (Deposit, Withdrawal, Transfer) |
| Tuples | Return `[boolean, string]` from operations — success flag + message |
| Union Types | `string \| number` for flexible account lookup |
| Type Narrowing | Narrow `AccountType \| undefined` with `if (!account)` checks |
| `try/catch` | Wrap risky operations (overdraft, invalid input) in try/catch |
| Type narrowing | unknown error with `if (err instanceof Error)` |

## Concepts

* OOP — Encapsulation via classes
* Interface contracts with `implements`
* Enum-driven logic
* Tuple return patterns
* Error boundary design

## Workflow

1. Read `statement.md`
2. Implement the solution in `src/`
3. Use `hints.md` only if you're stuck

**Difficulty:** ⭐⭐☆☆☆
**Estimated Time:** 60–90 minutes
