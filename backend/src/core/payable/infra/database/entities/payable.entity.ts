import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
} from 'typeorm';

import { AssignorEntity } from '../../../../../core/assignor/infra/database/entities/assignor.entity';
import { Payable } from 'src/core/payable/domain/payable';

@Entity('payable')
export class PayableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  value: number;

  @Column({
    type: Date,
  })
  emissionDate: Date;

  @Column({
    type: 'uuid',
  })
  @ManyToOne(() => AssignorEntity, (assignor) => assignor.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  assignor: string;

  @DeleteDateColumn({
    select: false,
  })
  public deletedAt: Date;

  static toDomain(databaseEntity: PayableEntity): Payable {
    const { id, assignor, emissionDate, value } = databaseEntity;
    return new Payable(id, value, emissionDate, assignor);
  }
}
