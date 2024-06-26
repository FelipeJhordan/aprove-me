import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PayableModule } from './core/payable/payable.module';
import { getConfiguration } from './common/configuration/config-global';
import { getDataSourceProvider } from './common/configuration/database/datasource';
import { AssignorModule } from './core/assignor/assignor.module';
import { DEFAULT_ENV } from './core/assignor/constants/sentings.constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
        ? `.env.${process.env.NODE_ENV}`
        : DEFAULT_ENV,
      load: [getConfiguration],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getDataSourceProvider,
      inject: [ConfigService],
    }),
    AssignorModule,
    PayableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
