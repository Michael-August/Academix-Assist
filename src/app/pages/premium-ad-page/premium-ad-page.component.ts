import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premium-ad-page',
  templateUrl: './premium-ad-page.component.html',
  styleUrls: ['./premium-ad-page.component.scss']
})
export class PremiumAdPageComponent implements OnInit {

  constructor(private router: Router) { }

  paymentDurationOption = {
    status: 'active',
    durationOption: 'monthly',
    price: '#500'
  }

  user: any

  isLoading: boolean = false

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

  goToSub() {

  }

  goBack() {
    this.router.navigateByUrl('chat')
  }

}
