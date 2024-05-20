import { Body, Controller } from '@nestjs/common';

import { BASE_PAYABLE_PATH } from '../constants/paths';
import { AssignorDto } from './dtos/assignor.dto';

@Controller(BASE_PAYABLE_PATH)
export class AssignorController {
  public createAssignor(@Body() assignorDto: AssignorDto) {}
}
