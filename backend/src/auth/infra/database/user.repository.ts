import { InjectRepository } from '@nestjs/typeorm';

import { IUserDatabaseRepository } from '../../domain/interfaces/user-database-repository.interface';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { User } from '../../domain/user';

export class UserRepository implements IUserDatabaseRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userEntity: Repository<UserEntity>,
  ) {}

  async createUser(login: string, password: string): Promise<User> {
    const userByDB = await this.userEntity.save({
      login,
      password,
    });

    return UserEntity.toDomain(userByDB);
  }
  async getUserByLogin(login: string): Promise<User> {
    return this.userEntity.findOne({
      where: {
        login,
      },
    });
  }
}
