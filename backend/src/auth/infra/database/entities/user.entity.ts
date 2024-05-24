import { User } from 'src/auth/domain/user';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  login: string;

  @Column()
  password: string;

  static toDomain(databaseEntity: UserEntity): User {
    const { id, login, password } = databaseEntity;
    return new User(id, login, password);
  }
}
