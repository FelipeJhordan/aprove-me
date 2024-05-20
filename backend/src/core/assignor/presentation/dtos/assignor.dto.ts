import { IsEmail, IsNotEmpty, IsUUID, MaxLength } from 'class-validator';
import {
  MAX_DOCUMENT_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PHONE_LENGTH,
} from '../../constants/max-length-fields.constants';
import { IsDocument } from '../../decorator/is-cnpj-cpf-valid.decorator';

export class AssignorDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @MaxLength(MAX_DOCUMENT_LENGTH)
  @IsDocument()
  document: string;

  @IsNotEmpty()
  @MaxLength(MAX_EMAIL_LENGTH)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(MAX_PHONE_LENGTH)
  phone: string;

  @IsNotEmpty()
  @MaxLength(MAX_NAME_LENGTH)
  name: string;
}
