import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  
  constructor(private authService:AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xParseApplicationId = 'NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi';
    const headers = new HttpHeaders({
      'X-Parse-Application-Id':xParseApplicationId,
      'x-parse-session-token':   this.authService.getLocalStorageToken() || ''
    });
 
    const modifiedReq = req.clone({ 
      headers
    });
    return next.handle(modifiedReq);
  }
}