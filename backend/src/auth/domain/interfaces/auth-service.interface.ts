import { AuthResponse } from '../auth-response';

export interface IAuthService {
  register(login: string, password: string): Promise<void>;
  login(login: string, password: string): Promise<AuthResponse>;
}
