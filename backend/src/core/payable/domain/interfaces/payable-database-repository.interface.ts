import { Payable } from '../payable';

export interface IPayableDatabaseRepository {
  listPayables(page: number, pageSize: number): Promise<Payable[]>;
  getPayableById(id: string): Promise<Payable>;
  createPayable(record: Partial<Payable>): Promise<Payable>;
  updatePayableById(id: string, payable: Partial<Payable>): Promise<null>;
  deletePayableById(id: string): Promise<null>;
}
