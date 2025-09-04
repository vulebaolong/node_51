import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/modules-api/article/article.module';
import { PrismaModule } from './modules/modules-system/prisma/prisma.module';
import { AuthModule } from './modules/modules-api/auth/auth.module';
import { TokenModule } from './modules/modules-system/token/token.module';

@Module({
  imports: [ArticleModule, PrismaModule, AuthModule, TokenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
