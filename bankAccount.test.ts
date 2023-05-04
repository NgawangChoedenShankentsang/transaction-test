import { BankAccount } from './src/bank/bank-account';

describe('BankAccount', () => {
  const accountNumber = 1;
  const pincode = 1234;
  const balance = 1000;
  const account = new BankAccount(accountNumber, pincode, balance);

  test('should create a new bank account with the given balance', () => {
    expect(account.balance).toBe(balance);
  });

  test('should deposit the amount correctly', () => {
    account.deposit(500);
    expect(account.balance).toBe(1500);
  });
  test('should not deposit a negative amount', () => {
    expect(() => account.deposit(-500)).toThrow("Cannot deposit negative amount");
  });

  test('should not withdraw a negative amount', () => {
    expect(() => account.widthdraw(-500, pincode)).toThrow("Cannot widthdraw negative amount");
  });

  test('should not withdraw more than the available balance', () => {
    expect(() => account.widthdraw(2000, pincode)).toThrow("Insufficient funds");
  });

  test('should not return the balance when the pincode is incorrect', () => {
    expect(() => account.getBalance(1111)).toThrow("Invalid pincode");
  });

});
