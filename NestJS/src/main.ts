import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './common/constant/app.constant';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // GLOBAL
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const logger = new Logger('Bootstrap');
  await app.listen(PORT ?? 3000, () => {
    logger.log(`Server is running on http://localhost:${PORT}`);
  });
}
bootstrap();
