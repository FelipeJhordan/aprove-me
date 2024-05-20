import { Inject } from '@nestjs/common';
import { Assignor } from '../domain/assignor';
import { IAssignorDatabaseRepository } from '../domain/interfaces/repositories/assignor-database-repository.interface';
import { IAssignorService } from '../domain/interfaces/repositories/assignor-service.interface';
import { IAssignorDatabaseRepositoryToken } from '../constants/ioc/injection-token';

export class AssignorService implements IAssignorService {
  constructor(
    @Inject(IAssignorDatabaseRepositoryToken)
    private repository: IAssignorDatabaseRepository,
  ) {}
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
