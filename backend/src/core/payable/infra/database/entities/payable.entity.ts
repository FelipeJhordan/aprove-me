import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { AssignorEntity } from '../../../../../core/assignor/infra/database/entities/assignor.entity';

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
  @ManyToOne(() => AssignorEntity, (assignor) => assignor.id)
  @JoinColumn()
  assignor: string;
}
