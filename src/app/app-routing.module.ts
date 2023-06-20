import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { PremiumAdPageComponent } from './pages/premium-ad-page/premium-ad-page.component';

const routes: Routes = [
  {
    path: 'chat', component: ChatPageComponent
  },
  {
    path: 'sub-detail', component: PremiumAdPageComponent
  },
  {
    path: '', redirectTo: 'chat', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
