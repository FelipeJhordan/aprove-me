import { IHash } from 'src/common/interfaces/hash.interface';
import { IAuthService } from './interfaces/auth-service.interface';
import { IUserDatabaseRepository } from './interfaces/user-database-repository.interface';
import { IJwt } from 'src/common/interfaces/jwt.interface';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { AuthResponse } from './auth-response';

export class AuthService implements IAuthService {
  constructor(
    private userRepository: IUserDatabaseRepository,
    private hash: IHash,
    private jwt: IJwt,
  ) {}
  async register(login: string, password: string): Promise<void> {
    const loginExists = await this.userRepository.getUserByLogin(login);
    if (loginExists) {
      throw new BadRequestException('Usuário já cadastrado');
    }
    const hashedPassword = await this.hash.hash(password);
    await this.userRepository.createUser(login, hashedPassword);
    return;
  }

  async login(login: string, password: string): Promise<AuthResponse> {
    const message = 'Credenciais inválidas';
    const user = await this.userRepository.getUserByLogin(login);

    if (!user) throw new UnauthorizedException(message);

    const isCorrectPassword = this.hash.compare(password, user.password);

    if (!isCorrectPassword) throw new UnauthorizedException(message);

    const token = await this.jwt.sign({ id: user.id });

    return Object.assign(user, { token });
  }
}
