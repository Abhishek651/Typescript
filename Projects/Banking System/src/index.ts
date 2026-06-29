// Project 2 — Banking System

// TypeScript enums are stored as numbers at runtime.
// Savings: 0, Current: 1
// Use a string enum instead
enum AccountType {
  Savings = "Savings",
  Current = "Current",
};

enum TransactionType {
  deposit = 'deposit',
  withdraw = 'withdraw',
  transfer = 'transfer'
};

enum status {
  success = 'success',
  failed = 'failed'
};

type Id = number | string;

interface IBankAccount {
  owner: string;
  accountId: Id;
  accountType: AccountType;
  balance: number;
  deposit(amount: number): [status, TransactionType];
  withdraw(amount: number): [status, TransactionType];
  transfer(amount: number, target: BankAccount): [status, TransactionType];
}

// Class-level declarations tell TypeScript which properties belong to each instance.
// When an object is created, the constructor assigns the initial values to those
// properties. Think of the class as defining "what an object has" and the
// constructor as defining "what values it starts with."
class BankAccount implements IBankAccount {
  owner: string;
  readonly accountId: number | string;
  accountType: AccountType;
  balance: number;
  private transaction: [TransactionType, number][] = [];

  constructor(
    owner: string,
    accountId: number | string,
    accountType: AccountType,
    balance: number = 0,
  ) {
    this.owner = owner;
    this.accountId = accountId;
    this.accountType = accountType;
    this.balance = balance;
  }

  deposit(amount: number): [status, TransactionType] {
    try {
      if (amount <= 0) {
        throw new Error("Deposit amount must be greater than zero.");
      } else {
        this.balance += amount;
        this.transaction.push([TransactionType.deposit, amount]);
        console.log("New balance : ", this.balance);
        return [status.success, TransactionType.deposit];
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log("Error : ", err.message);
      } else {
        console.log("Unexpected error : ", err);
      }
      return [status.failed, TransactionType.deposit];
    }
  }

  withdraw(amount: number): [status, TransactionType] {
    try {
      if (this.balance < amount) {
        throw new Error("Insufficient balance");
      } else {
        this.balance -= amount;
        this.transaction.push([TransactionType.withdraw, amount]);
        console.log("New Balance : ", this.balance);
        return [status.success, TransactionType.withdraw];
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log("Error : ", err.message);
      } else {
        console.log("Unexpected error : ", err);
      }
      return [status.failed, TransactionType.withdraw];
    }
  }

  transfer(amount: number, target: BankAccount): [status, TransactionType] {
    try {
      if (this.balance < amount) {
        throw new Error("Insufficient balance");
      } else {
        this.withdraw(amount);
        target.deposit(amount);
        console.log(
          `Transferred ${amount} from ${this.owner} to ${target.owner}`,
        );
        return [status.success, TransactionType.transfer];
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log("Error : ", err.message);
      } else {
        console.log("Unexpected error : ", err);
      }
      return [status.failed, TransactionType.withdraw];
    }
  }

  getDetails() {
    return {
      owner: this.owner,
      accountId: this.accountId,
      accountType: this.accountType,
      balance: this.balance,
    };
  }

  getHistory() {
    return this.transaction.map(([type, amount]) => ({
      type: TransactionType[type],
      amount: amount,
    }));
  }
}


const acc1 = new BankAccount('RAju', 101, AccountType.Savings);


console.log(acc1.getDetails());
console.log(acc1.deposit(500));
// console.log(acc1.withdraw(500));
// console.log(acc1.withdraw(500));

const acc2 = new BankAccount('Pintu', 102, AccountType.Current, 100);

console.log(acc1.transfer(100, acc2));
console.log(acc2.getDetails());



