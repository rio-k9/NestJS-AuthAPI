import {
  Controller,
  Post,
  Get,
  Body,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthCredentialsDto } from './types/dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { GetUser } from './types/get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard())
  me(@GetUser() user: User) {
    const response: User = user;
    // const keysToDelete: Array<string> = ["salt", "password"]
    // keysToDelete.forEach(k => delete response[k])
    return response;
  }
}
