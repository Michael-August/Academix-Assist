import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMessage } from 'src/app/core/models/message.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }

  getConversations(userId: string) {
    return this.http.get(`${this.BASE_URL}/conversation/${userId}`)
  }

  getMessages(conversationId: string) {
    return this.http.get(`${this.BASE_URL}/message/${conversationId}`)
  }

  createMessage(message: Partial<IMessage>) {
    return this.http.post(`${this.BASE_URL}/message`, message)
  }
}
