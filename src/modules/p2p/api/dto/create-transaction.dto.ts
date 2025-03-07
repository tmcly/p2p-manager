import { Currency } from '../../domain/enums';
import { Chain } from '../../domain/enums/chain.enum';
import { IntentType } from '../../domain/enums/intent-type.enum';

export class CreateP2PIntentDto {
  userName: string;
  intentType: IntentType;
  amount: number;
  currency: Currency;
  chain: Chain | null;
  description: string | null;
}
