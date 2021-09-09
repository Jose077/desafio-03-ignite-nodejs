import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

 export class GamesRepository { //implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<any> {//Promise<Game[]> {
    return undefined //this.repository.createQueryBuilder()
      // Complete usando query builder
  }

  async countAllGames(): Promise<any> {//Promise<[{ count: string }]> {
    return undefined//this.repository.query() // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<any> {//Promise<User[]> {
    return undefined //this.repository.createQueryBuilder()
      // Complete usando query builder
  }
}
