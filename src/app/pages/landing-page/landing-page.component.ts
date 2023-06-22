import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

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

  signup() {

  }

  login() {

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
