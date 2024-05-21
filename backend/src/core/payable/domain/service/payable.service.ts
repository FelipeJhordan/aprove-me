import { ServiceException } from 'src/common/entities/service-exception';
import { IPayableDatabaseRepository } from '../interfaces/payable-database-repository.interface';
import { IPayableService } from '../interfaces/payable-service.interface';
import { Payable } from '../payable';
import { ErrorType } from 'src/common/types/error-types.enum';
import { IAssignorDatabaseRepository } from 'src/core/assignor/domain/interfaces/assignor-database-repository.interface';
import { Inject } from '@nestjs/common';
import { IAssignorDatabaseRepositoryToken } from 'src/core/assignor/constants/ioc/injection-token';
import { IPayableDatabaseRepositoryToken } from '../../constants/ioc/injection-token';

export class PayableService implements IPayableService {
  constructor(
    @Inject(IPayableDatabaseRepositoryToken)
    private payableRepository: IPayableDatabaseRepository,
    @Inject(IAssignorDatabaseRepositoryToken)
    private assignorRepository: IAssignorDatabaseRepository,
  ) {}

  listPayables(page: number, pageSize: number): Promise<Payable[]> {
    return this.payableRepository.listPayables(page, pageSize);
  }

  async getPayableById(id: string): Promise<Payable> {
    const payableById = await this.payableRepository.getPayableById(id);
    if (!payableById) {
      throw new ServiceException(
        'Recebível não encontrado',
        ErrorType.NOT_FOUND_ERROR,
      );
    }

    return payableById;
  }

  async createPayable(record: Partial<Payable>): Promise<Payable> {
    const { assignor } = record;

    await this.verifyAssignorId(assignor);

    return this.payableRepository.createPayable(record);
  }

  async verifyAssignorId(assignorId: string): Promise<void> {
    const assignorByDb =
      await this.assignorRepository.getAssignorById(assignorId);

    if (!assignorByDb) {
      throw new ServiceException(
        'Cedente não encontrado',
        ErrorType.NOT_FOUND_ERROR,
      );
    }
  }

  async updatePayableById(id: string, record: Partial<Payable>): Promise<null> {
    const { assignor } = record;

    await Promise.all([
      await this.verifyAssignorId(assignor),
      await this.getPayableById(id),
    ]);

    return this.payableRepository.updatePayableById(id, record);
  }

  async deletePayableById(id: string): Promise<null> {
    await this.getPayableById(id);

    return this.payableRepository.deletePayableById(id);
  }
}
