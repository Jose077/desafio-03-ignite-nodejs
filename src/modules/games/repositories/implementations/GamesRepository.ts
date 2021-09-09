import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

 export class GamesRepository { //implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
      // Terminar
      return await this.repository.createQueryBuilder("games").where("games.title like :title", { title: `%${param}%`}).getMany()

  }

  async countAllGames():  Promise<[{ count: string }]> {
    return this.repository.query(
      `
        SELECT 
            COUNT(*)
        FROM 
          games;

      `
    ) 
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    // @ts-ignore
    return await this.repository.createQueryBuilder("user").innerJoin("user.games", "users").getMany()  //where("games.id = :id", {id}).innerJoin("games.users", "users").getMany()
  }
}
