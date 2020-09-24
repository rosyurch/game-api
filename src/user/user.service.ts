import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    async create(userData: UserDto) {
        // add validation, error handling
        const saltRounds = 10;
        const hashedPassword = await hash(userData.password, saltRounds);
        const hashedUser = { ...userData, password: hashedPassword };

        const { password, ...userResponse } = await this.userRepository.save(
            hashedUser,
        );
        return userResponse;
    }

    getAll() {
        return this.userRepository.find();
    }

    findOne(email: string) {
        return this.userRepository.findOne({ email });
    }

    delete(id: number) {
        return this.userRepository.delete({ id });
    }
}
