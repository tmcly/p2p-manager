import { P2PIntent } from '../../../domain/entities/p2p-intent.entity';
import { P2PIntentModel } from '../model/p2p-intent.model';

export class P2PIntentMapper {
  static toPersistence(domainEntity: P2PIntent): P2PIntentModel {
    const persistenceEntity = new P2PIntentModel();

    persistenceEntity.id = domainEntity.id;
    persistenceEntity.userName = domainEntity.userName;
    persistenceEntity.intentType = domainEntity.intentType;
    persistenceEntity.amount = domainEntity.amount;
    persistenceEntity.currency = domainEntity.currency;
    persistenceEntity.chain = domainEntity.chain;
    persistenceEntity.description = domainEntity.description;
    persistenceEntity.status = domainEntity.status;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;
    persistenceEntity.expiresAt = domainEntity.expiresAt;

    console.log(persistenceEntity);
    return persistenceEntity;
  }

  static toDomain(persistenceEntity: P2PIntentModel): P2PIntent {
    const domainEntity = new P2PIntent(
      persistenceEntity.userName,
      persistenceEntity.intentType,
      persistenceEntity.amount,
      persistenceEntity.currency,
      persistenceEntity.chain,
      persistenceEntity.description,
    );

    domainEntity.id = persistenceEntity.id;
    domainEntity.status = persistenceEntity.status;
    domainEntity.createdAt = persistenceEntity.createdAt;
    domainEntity.updatedAt = persistenceEntity.updatedAt;
    domainEntity.expiresAt = persistenceEntity.expiresAt;

    return domainEntity;
  }
}
