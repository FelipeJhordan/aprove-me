import { IsEmail, IsOptional, MaxLength } from 'class-validator';
import {
  MAX_DOCUMENT_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PHONE_LENGTH,
} from '../../constants/max-length-fields.constants';
import { IsDocument } from '../../decorator/is-cnpj-cpf-valid.decorator';

export class UpdateAssignorDto {
  @IsDocument()
  @MaxLength(MAX_DOCUMENT_LENGTH)
  @IsOptional()
  document: string;

  @MaxLength(MAX_EMAIL_LENGTH)
  @IsEmail()
  @IsOptional()
  email: string;

  @MaxLength(MAX_PHONE_LENGTH)
  @IsOptional()
  phone: string;

  @MaxLength(MAX_NAME_LENGTH)
  @IsOptional()
  name: string;
}
