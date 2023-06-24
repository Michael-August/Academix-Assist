import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotificationService, ToasterType } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private authSrv: AuthService, private notifSrv: NotificationService) { }

  paymentDurationOption = {
    status: 'active',
    durationOption: 'monthly',
    price: '#500'
  }

  isLoading: boolean = false

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  openAuthModal: boolean = false
  openLogInModal: boolean = false
  openSignUpModal: boolean = false

  user: any

  isError: boolean = false
  msg = ''

  ngOnInit(): void {
  }

  switchDurationOption(duration: string) {
    switch (duration) {
      case 'monthly':
        this.paymentDurationOption.price = '#500'
        this.paymentDurationOption.durationOption = 'monthly'
        break;
      case 'annual':
        this.paymentDurationOption.price = '#5,000'
        this.paymentDurationOption.durationOption = 'annual'
        break
      default:
        break;
    }
  }

  closeModalAction () {
    this.openAuthModal = false
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

  goToSub() {

  }

  goBack() {
    this.router.navigateByUrl('chat')
  }

}
