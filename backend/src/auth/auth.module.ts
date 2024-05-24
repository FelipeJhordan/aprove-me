import { Module } from '@nestjs/common';
import {
  IAuthServiceToken,
  IUserDatabaseRepositoryToken,
} from './constants/ioc/injection-token';
import { AuthService } from './domain/auth.service';
import { UserRepository } from './infra/database/user.repository';
import { AuthController } from './presentation/auth.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  providers: [
    {
      provide: IAuthServiceToken,
      useClass: AuthService,
    },
    {
      provide: IUserDatabaseRepositoryToken,
      useClass: UserRepository,
    },
  ],
  controllers: [AuthController],
  imports: [CommonModule],
})
export class AuthModule {}
