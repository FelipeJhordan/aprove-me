import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { BASE_PAYABLE_PATH } from '../constants/paths.constants';
import { PayableService } from '../domain/service/payable.service';
import { IPayableServiceToken } from '../constants/ioc/injection-token';
import { CreatePayableDto } from './dtos/create-payable.dto';
import { Payable } from '../domain/payable';
import { PayableQueryDto } from './dtos/payable-query.dto';
import { UpdatePayableDto } from './dtos/update-payable.dto';

@Controller(BASE_PAYABLE_PATH)
export class PayableController {
  constructor(
    @Inject(IPayableServiceToken) private payableService: PayableService,
  ) {}

  @Get()
  public listPayables(
    @Query() payableQuery: PayableQueryDto,
  ): Promise<Payable[]> {
    const { page, pageSize } = payableQuery;
    return this.payableService.listPayables(page, pageSize);
  }

  @Get(':id')
  public getPayableById(@Param('id') id: string): Promise<Payable> {
    return this.payableService.getPayableById(id);
  }

  @Post()
  public createPayableWithAssignor(
    @Body() createPayable: CreatePayableDto,
  ): Promise<Payable> {
    return this.payableService.createPayable(createPayable);
  }

  @Put(':id')
  public updatePayableById(
    @Param('id') id: string,
    @Body() updatePayableDto: UpdatePayableDto,
  ): Promise<Payable> {
    return this.payableService.updatePayableById(id, updatePayableDto);
  }

  @Delete(':id')
  public deletePayableByIds(@Param('id') id: string): Promise<Payable> {
    return this.payableService.deletePayableById(id);
  }
}
