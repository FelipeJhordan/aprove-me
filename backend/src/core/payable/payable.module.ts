import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PayableController } from './presentation/payable.controller';
import { PayableEntity } from './infra/database/entities/payable.entity';
import { IPayableDatabaseRepositoryToken } from './constants/ioc/injection-token';
import { PayableRepository } from './infra/database/payable.repository';

@Module({
  controllers: [PayableController],
  imports: [TypeOrmModule.forFeature([PayableEntity])],
  providers: [
    {
      provide: IPayableDatabaseRepositoryToken,
      useClass: PayableRepository,
    },
  ],
})
export class PayableModule {}
