import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { UserRO } from './user.interface';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('signup')
    async signup(@Body() userData: UserDto): Promise<UserRO> {
        return this.userService.create(userData);
    }

    @Get('all')
    async listAll(): Promise<UserDto[]> {
        return this.userService.getAll();
    }
}
