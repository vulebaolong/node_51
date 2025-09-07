import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseSuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const { statusCode } = context.switchToHttp().getResponse<Response>();

    return next.handle().pipe(
      // tap ( from 'rxjs/operators'): chạm, không thay đổi dữ liệu trả về, lỗi sẽ không bắt được
      // finalize ( from 'rxjs/operators'): không thay đổi dữ liệu trả về, bắt được kể cả lỗi
      // map ( from 'rxjs/operators'): thay đổi đữ liệu trả về, format
      map((data) => {
        // console.log({ data });
        return {
          status: `success`,
          statusCode: statusCode,
          message: ``,
          data: data,
        };
      }),
    );
  }
}
