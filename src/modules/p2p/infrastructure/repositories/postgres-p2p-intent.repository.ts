import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { P2PIntent } from '../../domain/entities/p2p-intent.entity';
import { IP2PIntentRepository } from '../../domain/repositories/p2p-intent.repository';
import { P2PIntentModel } from '../database/model/p2p-intent.model';
import { P2PIntentMapper } from '../database/mappers/p2p-intent.mapper';

@Injectable()
export class PostgresP2PIntentRepository implements IP2PIntentRepository {
  constructor(
    @InjectRepository(P2PIntentModel)
    private readonly p2pIntentRepository: Repository<P2PIntentModel>,
  ) {}

  async create(p2pIntent: P2PIntent): Promise<P2PIntent> {
    const p2pIntentEntity = P2PIntentMapper.toPersistence(p2pIntent);

    const savedEntity = await this.p2pIntentRepository.save(p2pIntentEntity);

    return P2PIntentMapper.toDomain(savedEntity);
  }

  async findById(id: string): Promise<P2PIntent | null> {
    const p2pIntentEntity = await this.p2pIntentRepository.findOne({
      where: { id },
    });

    if (!p2pIntentEntity) {
      return null;
    }

    return P2PIntentMapper.toDomain(p2pIntentEntity);
  }

  async findAll(): Promise<P2PIntent[]> {
    const entities = await this.p2pIntentRepository.find();
    return entities.map((entity) => P2PIntentMapper.toDomain(entity));
  }

  async update(p2pIntent: P2PIntent): Promise<P2PIntent> {
    const entity = P2PIntentMapper.toPersistence(p2pIntent);
    const updatedEntity = await this.p2pIntentRepository.save(entity);
    return P2PIntentMapper.toDomain(updatedEntity);
  }
}
