import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotificationService, ToasterType } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authSrv: AuthService, private router: Router, private notifSrv: NotificationService) { }

  isLoading: boolean = false

  isLoggedIn: any
  user: any

  isError: boolean = false
  msg = ''

  signOutOpen: boolean = false

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  openAuthModal: boolean = false
  openLogInModal: boolean = false
  openSignUpModal: boolean = false

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('User') || '')
    this.authSrv.isLoggedIn$.asObservable().subscribe(res => this.isLoggedIn = res)
  }

  closeModalAction () {
    this.openAuthModal = false
  }

  showSignOut() {
    this.signOutOpen = !this.signOutOpen
  }

  login() {
    this.isLoading = true
    this.authSrv.login({...this.loginForm.value}).subscribe((res: any) => {
      if(res.success == true) {
        this.authSrv.isLoggedIn$.next(true)
        localStorage.setItem('Token', res.data.access_token)
        let user = JSON.stringify(res.data.loggedinUser)
        localStorage.setItem('User', user)
        this.openAuthModal = false
        
        this.router.navigateByUrl('/chat')
        this.notifSrv.notifyByToast('User logged in successfully', ToasterType.Success)
      }
    }).add(() => this.isLoading = false)
  }

  signup() {
    this.isLoading = true
    this.authSrv.signup({...this.signinForm.value}).subscribe(res => {
      this.openAuthModal = true
      this.openSignUpModal = false
      this.openLogInModal = true
    }, err => {
      if(err.status == 400) {
        this.notifSrv.notifyByToast(`${err.error.message}`, ToasterType.Error)
      }
    }).add(() => this.isLoading = false)
  }

  logOut(){
    this.authSrv.logOut()
  }

  clearErrorMsg() {
    if(this.loginForm.controls['email'].dirty) {
      this.isError = false
      this.msg = ''
      return
    }
  }

  openForm(form: string) {
    this.openAuthModal = true
    switch (form) {
      case 'login':
        this.openLogInModal = true
        this.openSignUpModal = false
        break;
      case 'signup':
        this.openSignUpModal = true
        this.openLogInModal = false
        break;
      default:
        break;
    }
  }

}
