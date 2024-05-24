import { Body, Controller, Post } from '@nestjs/common';
import {
  BASE_AUTH_PATH,
  AUTH_REGISTER,
} from '../constants/paths/paths.constants';
import { AuthDto } from './dtos/auth.dto';

@Controller(BASE_AUTH_PATH)
export class AuthController {
  constructor() {}
  @Post(BASE_AUTH_PATH)
  public login(@Body() authDto: AuthDto) {}

  @Post(AUTH_REGISTER)
  public register(@Body() authDto: AuthDto) {}
}
