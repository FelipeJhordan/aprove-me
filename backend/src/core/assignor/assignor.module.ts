import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AssignorEntity } from './infra/database/entities/assignor.entity';
import { AssignorController } from './presentation/assignor.controller';
import { IAssignorDatabaseRepositoryToken } from './constants/ioc/injection-token';
import { AssignorRepository } from './infra/database/assignor.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AssignorEntity])],
  controllers: [AssignorController],
  providers: [
    {
      provide: IAssignorDatabaseRepositoryToken,
      useClass: AssignorRepository,
    },
  ],
})
export class AssignorModule {}
