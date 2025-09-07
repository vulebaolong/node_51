import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './common/constant/app.constant';
import { Logger, ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ResponseSuccessInterceptor } from './common/interceptors/response-success.interceptor';
import { ProtectGuard1 } from './common/guard/protect/protect1.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // GLOBAL
const reflector =  app.get(Reflector)
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new ResponseSuccessInterceptor());
  app.useGlobalGuards(new ProtectGuard1(reflector))

  const logger = new Logger('Bootstrap');
  await app.listen(PORT ?? 3000, () => {
    logger.log(`Server is running on http://localhost:${PORT}`);
  });
}
bootstrap();
