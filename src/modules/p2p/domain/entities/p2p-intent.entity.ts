import { Currency } from '../enums';
import { Chain } from '../enums/chain.enum';
import { IntentType } from '../enums/intent-type.enum';
import { IntentStatus } from '../enums/intent-status.enum';
import { v4 as uuidv4 } from 'uuid';

export class P2PIntent {
  public id: string;
  public userName: string;
  public intentType: IntentType;
  public amount: number;
  public currency: Currency;
  public chain: Chain | null;
  public description: string | null;
  public status: IntentStatus;
  public createdAt: Date;
  public updatedAt: Date;
  public expiresAt: Date;

  constructor(
    userName: string,
    intentType: IntentType,
    amount: number,
    currency: Currency,
    chain: Chain | null,
    description: string | null,
  ) {
    this.id = uuidv4();
    this.userName = userName;
    this.intentType = intentType;
    this.amount = amount;
    this.currency = currency;
    this.chain = chain ?? null;
    this.description = description ?? null;
    this.status = IntentStatus.OPEN;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.expiresAt = new Date();
  }
}
