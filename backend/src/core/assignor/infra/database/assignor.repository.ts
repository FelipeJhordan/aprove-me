/* eslint-disable @typescript-eslint/no-unused-vars */
import { Assignor } from '../../domain/assignor';
import { IAssignorDatabaseRepository } from '../../domain/interfaces/repositories/assignor-database-repository.interface';

export class AssignorRepository implements IAssignorDatabaseRepository {
  listAssignors(): Promise<Assignor[]> {
    throw new Error('Method not implemented.');
  }
  getAssignorById(id: string): Promise<Assignor> {
    throw new Error('Method not implemented.');
  }
  createAssignor(record: Partial<Assignor>): Promise<Assignor> {
    throw new Error('Method not implemented.');
  }
  updateAssignorById(id: string, record: Partial<Assignor>): Promise<Assignor> {
    throw new Error('Method not implemented.');
  }
  deleteAssignorById(id: string): Promise<null> {
    throw new Error('Method not implemented.');
  }
}
