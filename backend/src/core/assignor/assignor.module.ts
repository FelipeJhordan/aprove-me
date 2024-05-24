import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AssignorEntity } from './infra/database/entities/assignor.entity';
import { AssignorController } from './presentation/assignor.controller';
import {
  IAssignorDatabaseRepositoryToken,
  IAssignorServiceToken,
} from './constants/ioc/injection-token';
import { AssignorRepository } from './infra/database/assignor.repository';
import { AssignorService } from './domain/service/assignor.service';
import { PayableModule } from '../payable/payable.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AssignorEntity]),
    forwardRef(() => PayableModule),
  ],
  controllers: [AssignorController],
  providers: [
    {
      provide: IAssignorDatabaseRepositoryToken,
      useClass: AssignorRepository,
    },
    {
      provide: IAssignorServiceToken,
      useClass: AssignorService,
    },
  ],
  exports: [IAssignorDatabaseRepositoryToken],
})
export class AssignorModule {}
