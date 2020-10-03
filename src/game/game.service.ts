import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game) private gameRepository: Repository<Game>,
    ) {}

    // create by host

    // take part, as player

    // watch
}
