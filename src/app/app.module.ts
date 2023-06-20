import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConversationsComponent } from './components/conversations/conversations.component';
import { ChatsComponent } from './components/chats/chats.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { DottedLoaderComponent } from './shared/components/dotted-loader/dotted-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PremiumAdPageComponent } from './pages/premium-ad-page/premium-ad-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConversationsComponent,
    ChatsComponent,
    LandingPageComponent,
    ChatPageComponent,
    ModalComponent,
    DottedLoaderComponent,
    PremiumAdPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
