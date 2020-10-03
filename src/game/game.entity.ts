import { User } from 'src/user/user.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @ManyToOne(
        type => User,
        user => user.hostedGames,
    )
    host!: User;

    @Column()
    structure!: number[];

    @ManyToMany(
        type => User,
        player => player.games,
    )
    @JoinTable()
    players!: User[];

    // TD add question entity(many-to-one)
}
