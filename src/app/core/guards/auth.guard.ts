import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // constructor(private router: Router, private notifSrv: NotificationService) {

  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // let token = localStorage.getItem('Token')

    // if (!token) {
    //   this.router.navigate(['/auth']);
    //   this.notifSrv.notifyByToast('Login to access this route', ToasterType.Success)
    //   return false
    // }
    return true;
  }
  
}
