import { UserRO } from 'src/user/user.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    host!: UserRO;

    // change to smth like {...UserRO, onetimeName:string }
    @Column()
    participants!: UserRO[];
}
