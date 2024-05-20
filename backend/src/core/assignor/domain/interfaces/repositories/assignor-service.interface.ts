import { Assignor } from '../../assignor';

export interface IAssignorService {
  listAssignors(): Promise<Assignor[]>;
  getAssignorById(id: string): Promise<Assignor>;
  createAssignor(record: Partial<Assignor>): Promise<Assignor>;
  updateAssignorById(id: string, record: Partial<Assignor>): Promise<Assignor>;
  deleteAssignorById(id: string): Promise<null>;
}
