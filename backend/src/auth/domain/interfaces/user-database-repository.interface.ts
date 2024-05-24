import { User } from '../user';

export interface IUserDatabaseRepository {
  createUser(login: string, password: string): Promise<User>;

  getUserByLogin(login: string): Promise<User>;
}
