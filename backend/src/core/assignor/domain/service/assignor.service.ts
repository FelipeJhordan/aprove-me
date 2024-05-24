import { Assignor } from '../assignor';
import { IAssignorDatabaseRepository } from '../interfaces/assignor-database-repository.interface';
import { IAssignorService } from '../interfaces/assignor-service.interface';
import { ServiceException } from 'src/common/entities/service-exception';
import { ErrorType } from '../../../../common/types/error-types.enum';
import { Inject } from '@nestjs/common';
import { IAssignorDatabaseRepositoryToken } from '../../constants/ioc/injection-token';
import { IPayableDatabaseRepositoryToken } from 'src/core/payable/constants/ioc/injection-token';
import { IPayableDatabaseRepository } from 'src/core/payable/domain/interfaces/payable-database-repository.interface';

export class AssignorService implements IAssignorService {
  constructor(
    @Inject(IAssignorDatabaseRepositoryToken)
    private assignorRepository: IAssignorDatabaseRepository,
    @Inject(IPayableDatabaseRepositoryToken)
    private payableRepository: IPayableDatabaseRepository,
  ) {}

  listAssignors(): Promise<Assignor[]> {
    return this.assignorRepository.listAssignors();
  }
  async getAssignorById(id: string): Promise<Assignor> {
    const assignorByDb = await this.assignorRepository.getAssignorById(id);
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
      await this.assignorRepository.getAssignorByDocument(record.document);
    if (hasAssignorWithSameDocument) {
      throw new ServiceException(
        'Documento já cadastrado.',
        ErrorType.BAD_REQUEST_ERROR,
      );
    }

    return this.assignorRepository.createAssignor(record);
  }
  async updateAssignorById(
    id: string,
    record: Partial<Assignor>,
  ): Promise<null> {
    await this.getAssignorById(id);
    const hasAssignorWithSameDocument =
      await this.assignorRepository.getAssignorByDocument(record.document, id);

    if (hasAssignorWithSameDocument && record.document) {
      throw new ServiceException(
        'Documento já existente.',
        ErrorType.BAD_REQUEST_ERROR,
      );
    }
    return this.assignorRepository.updateAssignorById(id, record);
  }

  async deleteAssignorById(id: string): Promise<null> {
    await this.getAssignorById(id);

    await Promise.all([
      this.payableRepository.deletePayablesByAssignor(id),
      this.assignorRepository.deleteAssignorById(id),
    ]);

    return null;
  }
}
