import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { AuthResponse } from './dto/auth-response.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { Public } from './public.decorator';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => AuthResponse)
  async login(@Args('loginInput') loginInput: LoginInput): Promise<AuthResponse> {
    const token = await this.authService.login(loginInput);
    return { access_token: token };
  }
}