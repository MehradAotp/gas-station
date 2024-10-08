import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('users/login')
  async login(@Body() req) {
    return this.authService.login(req);
  }
}
