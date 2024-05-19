import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { AssignorDto } from '../../../assignor/presentation/dtos/assignor.dto';
import { IsAssignorMatching } from '../../../../core/assignor/decorator/is-assignor-matching.decorator';
import { PayableDto } from './payable.dto';

export class CreatePayableWithAssignorDto {
  @ValidateNested({ each: true })
  @Type(() => PayableDto)
  @IsAssignorMatching('assignor', {
    message: 'The assignor in payable does not match',
  })
  payable: PayableDto;

  @ValidateNested({ each: true })
  @Type(() => AssignorDto)
  assignor: AssignorDto;
}
