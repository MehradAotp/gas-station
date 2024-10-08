import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.FindByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const result = user.toObject();
      return {
        username: user.username,
        id: result._id,
      };
    }
    return 'Not Authorized';
  }

  async login(payload: any) {
    const { username, password } = payload;
    const user = this.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
