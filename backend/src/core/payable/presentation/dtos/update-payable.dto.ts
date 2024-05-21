import { IsDateString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class UpdatePayableDto {
  @IsOptional()
  @IsNumber()
  value?: number;

  @IsOptional()
  @IsDateString()
  emissionDate?: Date;

  @IsOptional()
  @IsUUID()
  assignor?: string;
}
