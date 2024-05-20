import { Payable } from '../../payable';

export interface IPayableDatabaseRepository {
  listPayables(): Promise<Payable[]>;
  getPayableById(id: string): Promise<Payable>;
  createPayable(record: Partial<Payable>): Promise<Payable>;
  updatePayableById(id: string, payable: Partial<Payable>): Promise<Payable>;
  deletePayableById(id: string): Promise<null>;
}
