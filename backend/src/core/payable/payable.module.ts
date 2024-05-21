import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PayableController } from './presentation/payable.controller';
import { PayableEntity } from './infra/database/entities/payable.entity';
import {
  IPayableDatabaseRepositoryToken,
  IPayableServiceToken,
} from './constants/ioc/injection-token';
import { PayableRepository } from './infra/database/payable.repository';
import { PayableService } from './domain/service/payable.service';
import { AssignorModule } from '../assignor/assignor.module';

@Module({
  controllers: [PayableController],
  imports: [TypeOrmModule.forFeature([PayableEntity]), AssignorModule],
  providers: [
    {
      provide: IPayableDatabaseRepositoryToken,
      useClass: PayableRepository,
    },
    {
      provide: IPayableServiceToken,
      useClass: PayableService,
    },
  ],
})
export class PayableModule {}
