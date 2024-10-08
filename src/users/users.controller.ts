import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { createUserDto } from './dto/createUserDto';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.userService.createUser(username, password);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async userFindById(@Param('id') id: string): Promise<createUserDto> {
    return this.userService.userFindById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deletUser(@Param('id') id: string): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
