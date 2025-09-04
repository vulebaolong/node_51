import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { QueryArticleDto } from './dto/query-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async findAll(
    @Query()
    query: QueryArticleDto,
    @Param()
    param,
    @Headers('content-type')
    headers,
    @Body()
    body,
    @Req()
    req,
  ) {
    // console.log({ query, param, headers, body });
    return await this.articleService.findAll(query);
  }
}
