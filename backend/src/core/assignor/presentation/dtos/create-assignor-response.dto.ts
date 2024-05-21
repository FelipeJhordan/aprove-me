import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAssignorResponseDto {
  @Expose()
  document: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  name: string;
}
