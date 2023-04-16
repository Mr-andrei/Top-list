import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './auth.model/dto/auth.dto';

@Controller('auth')
export class AuthController {
    @Post('register')
    async register(@Body() dto: AuthDto) {}

    @HttpCode(200)
    @Post('login')
    async login() {}
}
