import { User } from './user';

export type AuthResponse = User & {
  token: string;
};
