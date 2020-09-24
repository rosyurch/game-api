import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('signup')
    async signup(@Body() userData: UserDto) {
        return this.userService.create(userData);
    }

    @Get('all')
    async listAll() {
        return this.userService.getAll();
    }

    @Delete(':id')
    async delete(@Param() { id }: { id: number }) {
        return this.userService.delete(id);
    }
}
