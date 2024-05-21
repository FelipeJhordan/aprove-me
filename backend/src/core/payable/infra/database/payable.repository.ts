/* eslint-disable @typescript-eslint/no-unused-vars */
import { InjectRepository } from '@nestjs/typeorm';
import { IPayableDatabaseRepository } from '../../domain/interfaces/payable-database-repository.interface';
import { Payable } from '../../domain/payable';
import { PayableEntity } from './entities/payable.entity';
import { Entity, Repository } from 'typeorm';

export class PayableRepository implements IPayableDatabaseRepository {
  constructor(
    @InjectRepository(PayableEntity)
    private payableRepository: Repository<PayableEntity>,
  ) {}
  listPayables(page: number = 1, pageSize: number = 10): Promise<Payable[]> {
    return this.payableRepository.find({
      skip: (page - 1) * (pageSize + 1),
      take: pageSize,
      where: {
        deletedAt: null,
      },
    });
  }
  getPayableById(id: string): Promise<Payable> {
    return this.payableRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createPayable(record: Partial<Payable>): Promise<Payable> {
    const savedPayable = await this.payableRepository.save(record);
    return PayableEntity.toDomain(savedPayable);
  }

  async updatePayableById(id: string, record: Partial<Payable>): Promise<null> {
    await this.payableRepository.update(
      {
        id,
      },
      record,
    );

    return;
  }

  async deletePayableById(id: string): Promise<null> {
    await this.payableRepository.softDelete({
      id,
    });

    return;
  }
}
