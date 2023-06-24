import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IConversation } from 'src/app/core/models/conversation.model';
import { IMessage } from 'src/app/core/models/message.model';
import { ChatService } from 'src/app/shared/services/chat/chat.service';
import { NotificationService, ToasterType } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  messageForm = new FormGroup({
    message: new FormControl('', [Validators.required])
  })

  isLoading: boolean = false

  conversations: IConversation[] = []
  messages: IMessage[] = []
  conversationId!: string

  isNew: boolean = false
  user: any

  constructor(private chatSrv: ChatService, private notifSrv: NotificationService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('User') || '')

    if(this.user.plan == 'premium') {
      this.getConversations(this.user._id)
    }
    this.getConversations(this.user._id)
  }

  grabIsNewState(event: any) {
    this.isNew = event
    console.log(this.isNew)
  }

  getMessages(conversationId: string) {
    this.isLoading = true
    this.isNew = false
    this.chatSrv.getMessages(conversationId).subscribe((res: any) => {
      if(res.success == true) {
        this.messages = res.data
        this.notifSrv.notifyByToast(`Messages fetched successfully`, ToasterType.Success)
      }
    }, err => {

    }).add(() => this.isLoading = false)
  }

  getConversations(userId: string) {
    this.isLoading = true
    this.chatSrv.getConversations(userId).subscribe((res: any) => {
      if(res.success == true) {
        this.conversations = res.data.reverse()
        this.notifSrv.notifyByToast(`Conversations fetched successfully`, ToasterType.Success)
      }
    }).add(() => this.isLoading = false)
  }

  createMessage() {
    this.isLoading = true
    let payload = { ...this.messageForm.value, isNew: this.isNew, conversationId: this.conversationId }
    this.messages = [...this.messages, payload]
    if(this.conversations.length == 0) {
      payload.isNew = true
    }

    this.messageForm.reset()
    console.log(payload)
    this.chatSrv.createMessage(payload).subscribe((res: any) => {
      if(res.success == true) {

        if(res.conversationId) {
          this.conversationId = res.conversationId
        }

        this.messages = [...this.messages, res.messageFromAi]
        this.getConversations(this.user._id)
      }
    }).add(() => this.isLoading = false)
  }

}
