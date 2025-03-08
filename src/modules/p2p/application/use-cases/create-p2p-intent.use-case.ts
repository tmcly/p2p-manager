import { Injectable, Inject } from '@nestjs/common';
import { P2PIntent } from '../../domain/entities/p2p-intent.entity';
import { IP2PIntentRepository } from '../../domain/repositories/p2p-intent.repository';
import { CreateP2PIntentDto } from '../../api/dto/create-transaction.dto';

@Injectable()
export class CreateP2PIntentUseCase {
  constructor(
    @Inject('P2PIntentRepository')
    private readonly p2pIntentRepository: IP2PIntentRepository,
  ) {}

  async execute(createP2PIntentDto: CreateP2PIntentDto): Promise<P2PIntent> {
    const p2pIntent = new P2PIntent(
      createP2PIntentDto.userName,
      createP2PIntentDto.intentType,
      createP2PIntentDto.amount,
      createP2PIntentDto.currency,
      createP2PIntentDto.chain,
      createP2PIntentDto.description,
    );

    return this.p2pIntentRepository.create(p2pIntent);
  }
}
