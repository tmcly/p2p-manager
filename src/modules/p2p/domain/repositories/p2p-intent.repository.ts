import { P2PIntent } from '../entities/p2p-intent.entity';

export interface IP2PIntentRepository {
  create(p2pIntent: P2PIntent): Promise<P2PIntent>;
  findById(id: string): Promise<P2PIntent | null>;
  findAll(): Promise<P2PIntent[]>;
  update(p2pIntent: P2PIntent): Promise<P2PIntent>;
}
