import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotificationService, ToasterType } from 'src/app/shared/services/notification/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private notifSrv: NotificationService, private authSrv: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401 && err.error['message'] === 'jwt expired') {
          this.authSrv.logOut();
          this.notifSrv.notifyByToast('Token expired, log in again', ToasterType.Error)
        }

        if (err.status === 401) {
          this.authSrv.logOut();
          this.notifSrv.notifyByToast('No user found, signup first', ToasterType.Error)
        }

        if(err.status == 500 && err.error.message === "jwt malformed") {
          this.notifSrv.notifyByToast(`please log in to perform this action`, ToasterType.Error)
        }

        if (err.status === 500) {
          this.notifSrv.notifyByToast('Something went wrong, try again', ToasterType.Error)
        }
        return throwError(err);
      })
    );
  }
}
