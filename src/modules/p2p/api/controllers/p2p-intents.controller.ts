import { Body, Controller, Post, HttpStatus, HttpCode } from '@nestjs/common';
import { CreateP2PIntentUseCase } from '../../application/use-cases/create-p2p-intent.use-case';
import { CreateP2PIntentDto } from '../dto/create-transaction.dto';

@Controller('p2p-intents')
export class P2PIntentsController {
  constructor(
    private readonly createP2PIntentUseCase: CreateP2PIntentUseCase,
  ) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async createP2PIntent(@Body() createP2PIntentDto: CreateP2PIntentDto) {
    const p2pIntent =
      await this.createP2PIntentUseCase.execute(createP2PIntentDto);

    return {
      id: p2pIntent.id,
      status: p2pIntent.status,
      createdAt: p2pIntent.createdAt,
      _links: {
        self: {
          href: `/p2p-intents/${p2pIntent.id}`,
        },
      },
    };
  }
}
