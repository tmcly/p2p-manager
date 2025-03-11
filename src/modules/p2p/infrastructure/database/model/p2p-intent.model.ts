import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IntentStatus } from '../../../domain/enums/intent-status.enum';
import { IntentType } from '../../../domain/enums/intent-type.enum';
import { Currency } from '../../../domain/enums';
import { Chain } from '../../../domain/enums/chain.enum';

@Entity('p2p_intents')
export class P2PIntentModel {
  @PrimaryColumn()
  id: string;

  @Column()
  userName: string;

  @Column({
    type: 'enum',
    enum: IntentType,
    enumName: 'intent_type_enum',
  })
  intentType: IntentType;

  @Column('decimal', { precision: 18, scale: 8 })
  amount: number;

  @Column({
    type: 'enum',
    enum: Currency,
    enumName: 'currency_enum',
  })
  currency: Currency;

  @Column({
    type: 'enum',
    enum: Chain,
    enumName: 'chain_enum',
    nullable: true,
  })
  chain: Chain | null;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string | null;

  @Column({
    type: 'enum',
    enum: IntentStatus,
    enumName: 'intent_status_enum',
  })
  status: IntentStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  expiresAt: Date;
}
