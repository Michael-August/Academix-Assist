import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = environment.BASE_URL
  user: any
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  isLoginFromConfirmThreat$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }

  signup(payload: any) {
    return this.http.post(`${this.BASE_URL}/register`, payload)
  }

  login(payload: any) {
    return this.http.post(`${this.BASE_URL}/login`, payload)
  } 

  logOut() {
    localStorage.clear()
    this.router.navigateByUrl('/').then(() => {
      location.reload()
    })
    this.isLoggedIn$.next(false)
  }
}
