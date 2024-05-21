import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  MAX_DOCUMENT_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PHONE_LENGTH,
} from '../../../constants/max-length-fields.constants';
import { Assignor } from 'src/core/assignor/domain/assignor';

@Entity('assignor')
export class AssignorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: MAX_DOCUMENT_LENGTH,
  })
  document: string;

  @Column({
    length: MAX_EMAIL_LENGTH,
  })
  email: string;

  @Column({
    length: MAX_PHONE_LENGTH,
  })
  phone: string;

  @Column({
    length: MAX_NAME_LENGTH,
  })
  name: string;

  @DeleteDateColumn({
    select: false,
  })
  deletedAt: Date;

  static toDomain(databaseEntity: AssignorEntity): Assignor {
    const { id, document, email, name, phone } = databaseEntity;

    return new Assignor(id, document, email, phone, name);
  }
}
