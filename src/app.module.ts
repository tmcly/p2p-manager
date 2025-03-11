import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { P2PIntentsController } from './modules/p2p/api/controllers/p2p-intents.controller';
import { CreateP2PIntentUseCase } from './modules/p2p/application/use-cases/create-p2p-intent.use-case';
import { P2PIntentModel } from './modules/p2p/infrastructure/database/model/p2p-intent.model';
import { PostgresP2PIntentRepository } from './modules/p2p/infrastructure/repositories/postgres-p2p-intent.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [P2PIntentModel],
        synchronize: configService.get('NODE_ENV') === 'development',
      }),
    }),
    TypeOrmModule.forFeature([P2PIntentModel]),
  ],
  controllers: [P2PIntentsController],
  providers: [
    CreateP2PIntentUseCase,
    {
      provide: 'P2PIntentRepository',
      useClass: PostgresP2PIntentRepository,
    },
  ],
})
export class AppModule {}
