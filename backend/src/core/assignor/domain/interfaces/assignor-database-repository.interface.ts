import { Assignor } from '../assignor';

export interface IAssignorDatabaseRepository {
  listAssignors(): Promise<Assignor[]>;
  getAssignorById(id: string): Promise<Assignor>;
  getAssignorByDocument(document: string, id?: string): Promise<Assignor>;
  createAssignor(record: Partial<Assignor>): Promise<Assignor>;
  updateAssignorById(id: string, record: Partial<Assignor>): Promise<null>;
  deleteAssignorById(id: string): Promise<null>;
}
