import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import {
  MAX_DOCUMENT_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PHONE_LENGTH,
} from '../../constants/max-length-fields.constants';
import { IsDocument } from '../../decorator/is-cnpj-cpf-valid.decorator';

export class CreateAssignorDto {
  @IsDocument()
  @MaxLength(MAX_DOCUMENT_LENGTH)
  @IsNotEmpty()
  document: string;

  @MaxLength(MAX_EMAIL_LENGTH)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(MAX_PHONE_LENGTH)
  @IsNotEmpty()
  phone: string;

  @MaxLength(MAX_NAME_LENGTH)
  @IsNotEmpty()
  name: string;
}
