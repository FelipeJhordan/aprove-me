import { Payable } from '../payable';

export interface IPayableService {
  listPayables(page: number, pageSize: number): Promise<Payable[]>;
  getPayableById(id: string): Promise<Payable>;
  createPayable(record: Partial<Payable>): Promise<Payable>;
  updatePayableById(id: string, record: Partial<Payable>): Promise<Payable>;
  deletePayableById(id: string): Promise<null>;
  verifyAssignorId(assignorId: string): Promise<void>;
}
