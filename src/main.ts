import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as passport from 'passport';
import { AppModule } from './app.module';
import { AuthGuard } from './modules/auth/auth.guard';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  // app.use(passport.initialize());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
