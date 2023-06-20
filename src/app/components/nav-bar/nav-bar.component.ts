import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
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

}
