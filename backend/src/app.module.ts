import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PayableModule } from './core/payable/payable.module';
import { ConfigModule } from '@nestjs/config';
import { configurationGlobal } from './common/configuration/config.global';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      load: [ configurationGlobal ]
    }),
    PayableModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
