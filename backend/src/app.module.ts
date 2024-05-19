import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PayableModule } from './core/payable/payable.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getConfiguration } from './common/configuration/config-global';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDataSourceProvider } from './common/configuration/database/datasource';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
