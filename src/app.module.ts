import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Game } from './game/game.entity';
import { AuthModule } from './auth/auth.module';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { GameModule } from './game/game.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
            entities: [User, Game],
            synchronize: true,
            logging: true,
        }),
        UserModule,
        AuthModule,
        GameModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
