import Transaction from './Transaction';
interface TransactionWithId extends Transaction {
  _id: string;
}

export default TransactionWithId;
