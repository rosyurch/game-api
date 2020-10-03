import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    OneToMany,
} from 'typeorm';
import { Game } from '../game/game.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    email!: string;

    @Column({ nullable: true })
    name!: string;

    @Column()
    password!: string;

    @OneToMany(
        type => Game,
        game => game.host,
    )
    hostedGames!: Game[];

    //
    @ManyToMany(
        type => Game,
        game => game.players,
    )
    games!: Game[];
}
