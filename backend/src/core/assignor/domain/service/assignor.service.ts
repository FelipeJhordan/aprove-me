import { Assignor } from '../assignor';
import { IAssignorDatabaseRepository } from '../interfaces/assignor-database-repository.interface';
import { IAssignorService } from '../interfaces/assignor-service.interface';
import { ServiceException } from 'src/common/entities/service-exception';
import { ErrorType } from '../../../../common/types/error-types.enum';
import { Inject } from '@nestjs/common';
import { IAssignorDatabaseRepositoryToken } from '../../constants/ioc/injection-token';

export class AssignorService implements IAssignorService {
  constructor(
    @Inject(IAssignorDatabaseRepositoryToken)
    private repository: IAssignorDatabaseRepository,
  ) {}

  listAssignors(): Promise<Assignor[]> {
    return this.repository.listAssignors();
  }
  async getAssignorById(id: string): Promise<Assignor> {
    const assignorByDb = await this.repository.getAssignorById(id);
    if (!assignorByDb) {
      throw new ServiceException(
        'Cedente não encontrado',
        ErrorType.NOT_FOUND_ERROR,
      );
    }

    return assignorByDb;
  }
  async createAssignor(record: Partial<Assignor>): Promise<Assignor> {
    const hasAssignorWithSameDocument =
      await this.repository.getAssignorByDocument(record.document);
    if (hasAssignorWithSameDocument) {
      throw new ServiceException(
        'Documento já cadastrado.',
        ErrorType.BAD_REQUEST_ERROR,
      );
    }

    return this.repository.createAssignor(record);
  }
  async updateAssignorById(
    id: string,
    record: Partial<Assignor>,
  ): Promise<null> {
    await this.getAssignorById(id);
    const hasAssignorWithSameDocument =
      await this.repository.getAssignorByDocument(record.document, id);

    if (hasAssignorWithSameDocument && record.document) {
      throw new ServiceException(
        'Documento já existente.',
        ErrorType.BAD_REQUEST_ERROR,
      );
    }
    return this.repository.updateAssignorById(id, record);
  }
  async deleteAssignorById(id: string): Promise<null> {
    await this.getAssignorById(id);

    return this.repository.deleteAssignorById(id);
  }
}
