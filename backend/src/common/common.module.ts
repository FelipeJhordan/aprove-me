import { Module } from '@nestjs/common';
import { IHashToken, IJwtToken } from './constants/ioc/injection-token';
import { HashAdapter } from 'src/infra/hash/hash.adapter';
import { JwtAdapter } from 'src/infra/hash/jwt.adapter';

@Module({
  providers: [
    {
      provide: IHashToken,
      useClass: HashAdapter,
    },
    {
      provide: IJwtToken,
      useClass: JwtAdapter,
    },
  ],
  exports: [IHashToken, IJwtToken],
})
export class CommonModule {}
