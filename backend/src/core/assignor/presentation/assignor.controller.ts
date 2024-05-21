import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { BASE_ASSIGNOR_PATH } from '../constants/paths';
import { CreateAssignorDto } from './dtos/create-assignor.dto';
import { IAssignorService } from '../domain/interfaces/assignor-service.interface';
import { IAssignorServiceToken } from '../constants/ioc/injection-token';
import { UpdateAssignorDto } from './dtos/update-assignor.dto';
import { CreateAssignorResponseDto } from './dtos/create-assignor-response.dto';

@Controller(BASE_ASSIGNOR_PATH)
export class AssignorController {
  constructor(
    @Inject(IAssignorServiceToken) private service: IAssignorService,
  ) {}

  @Get()
  public listAssignors() {
    return this.service.listAssignors();
  }

  @Get(':id')
  public getAssignorById(@Param('id') id: string) {
    return this.service.getAssignorById(id);
  }

  @Post()
  public createAssignor(
    @Body() assignorDto: CreateAssignorDto,
  ): Promise<CreateAssignorResponseDto> {
    return this.service.createAssignor(assignorDto);
  }

  @Put(':id')
  public updateAssignorById(
    @Param('id') id: string,
    @Body() assignorDto: UpdateAssignorDto,
  ) {
    return this.service.updateAssignorById(id, assignorDto);
  }

  @Delete(':id')
  public deleteAssignorById(@Param('id') id: string) {
    return this.service.deleteAssignorById(id);
  }
}
