/* eslint-disable @typescript-eslint/no-unused-vars */
import { IPayableDatabaseRepository } from '../../domain/interfaces/repositories/payable-database-repository.interface';
import { Payable } from '../../domain/payable';

export class PayableRepository implements IPayableDatabaseRepository {
  listPayables(): Promise<Payable[]> {
    throw new Error('Method not implemented.');
  }
  getPayableById(id: string): Promise<Payable> {
    throw new Error('Method not implemented.');
  }
  createPayable(record: Partial<Payable>): Promise<Payable> {
    throw new Error('Method not implemented.');
  }
  updatePayableById(id: string, payable: Partial<Payable>): Promise<Payable> {
    throw new Error('Method not implemented.');
  }
  deletePayableById(id: string): Promise<null> {
    throw new Error('Method not implemented.');
  }
}
