import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { getAuthorization } from 'src/utils';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const [ts, hash, apikey] = getAuthorization();

    const authorizedReq = req.clone({
      params: req.params.appendAll({
        ts,
        apikey,
        hash,
      }),
    });

    return next.handle(authorizedReq);
  }
}
