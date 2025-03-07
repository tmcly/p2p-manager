import { Module } from '@nestjs/common';
import { P2PIntentsController } from './modules/p2p/api/controllers/p2p-intents.controller';
import { CreateP2PIntentUseCase } from './modules/p2p/application/use-cases/create-p2p-intent.use-case';
import { P2PIntent } from './modules/p2p/domain/entities/p2p-intent.entity';

// Este é um provider temporário que será substituído por uma implementação real
const P2PIntentRepositoryProvider = {
  provide: 'P2PIntentRepository',
  useValue: {
    create: (p2pIntent: P2PIntent) => Promise.resolve(p2pIntent),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findById: (_id: string) => Promise.resolve(null),
    findAll: () => Promise.resolve([]),
    update: (p2pIntent: P2PIntent) => Promise.resolve(p2pIntent),
  },
};

@Module({
  imports: [],
  controllers: [P2PIntentsController],
  providers: [CreateP2PIntentUseCase, P2PIntentRepositoryProvider],
})
export class AppModule {}
