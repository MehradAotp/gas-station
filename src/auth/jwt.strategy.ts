import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'YourSecretKey',
    });
  }

  async validate(payload: any) {
    const user = await this.userService.FindByUsername(payload.username);
    if (!user) {
      throw new UnauthorizedException('Unauthorized User');
    }
    return user;
  }
}
