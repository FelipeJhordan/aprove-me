import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PayableModule } from './core/payable/payable.module';
import { getConfiguration } from './common/configuration/config-global';
import { getDataSourceProvider } from './common/configuration/database/datasource';
import { AssignorModule } from './core/assignor/assignor.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [getConfiguration],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getDataSourceProvider,
      inject: [ConfigService],
    }),
    PayableModule,
    AssignorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
