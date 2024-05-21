/* eslint-disable @typescript-eslint/no-unused-vars */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';

import { Assignor } from '../../domain/assignor';
import { IAssignorDatabaseRepository } from '../../domain/interfaces/assignor-database-repository.interface';
import { AssignorEntity } from './entities/assignor.entity';
import { instanceToPlain } from 'class-transformer';

export class AssignorRepository implements IAssignorDatabaseRepository {
  constructor(
    @InjectRepository(AssignorEntity)
    private assignorRepository: Repository<AssignorEntity>,
  ) {}

  listAssignors(): Promise<Assignor[]> {
    return this.assignorRepository.find();
  }
  getAssignorById(id: string): Promise<Assignor> {
    return this.assignorRepository.findOne({
      where: {
        id: id,
      },
    });
  }
  async createAssignor(record: Partial<Assignor>): Promise<Assignor> {
    const savedAssignor = await this.assignorRepository.save(record);
    return AssignorEntity.toDomain(savedAssignor);
  }
  async updateAssignorById(
    id: string,
    record: Partial<Assignor>,
  ): Promise<null> {
    const updateResult = await this.assignorRepository.update(
      {
        id,
      },
      record,
    );

    return updateResult.raw[0];
  }
  async deleteAssignorById(id: string): Promise<null> {
    await this.assignorRepository.softDelete({
      id,
    });

    return;
  }

  getAssignorByDocument(document: string, id?: string): Promise<Assignor> {
    const where = {
      document,
    };

    if (id) {
      where['id'] = Not(id);
    }
    return this.assignorRepository.findOne({
      where,
    });
  }
}
