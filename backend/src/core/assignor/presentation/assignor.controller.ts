import { Body, Controller, Inject, Post } from '@nestjs/common';

import { BASE_PAYABLE_PATH } from '../constants/paths';
import { AssignorDto } from './dtos/assignor.dto';
import { IAssignorService } from '../domain/interfaces/repositories/assignor-service.interface';
import { IAssignorServiceToken } from '../constants/ioc/injection-token';

@Controller(BASE_PAYABLE_PATH)
export class AssignorController {
  constructor(
    @Inject(IAssignorServiceToken) private service: IAssignorService,
  ) {}

  @Post()
  public createAssignor(@Body() assignorDto: AssignorDto) {
    return this.service.createAssignor(assignorDto);
  }
}
