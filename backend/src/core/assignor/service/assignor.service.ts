import { Assignor } from '../domain/assignor';
import { IAssignorService } from '../domain/interfaces/repositories/assignor-service.interface';

export class AssignorService implements IAssignorService {
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
