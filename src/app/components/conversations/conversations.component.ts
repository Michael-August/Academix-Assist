import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConversation } from 'src/app/core/models/conversation.model';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {

  constructor() { }

  @Input() conversations: IConversation[] = []
  @Output() emitIsNewFlag = new EventEmitter()
  @Output() emitConvoId = new EventEmitter()

  isNew: boolean = false

  user: any

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('User') || '')
  }

  updateIsNewValue() {
    this.isNew = true
    this.emitIsNewFlag.emit(this.isNew)
  }

  emitForMessages(conversationId: string) {
    this.emitConvoId.emit(conversationId)
  }

}
