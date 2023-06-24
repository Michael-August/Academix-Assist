import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/core/models/message.model';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  constructor() { }

  @Input() messages: IMessage[] = []
  @Input() isLoading: boolean = false
  @Input() isNew: boolean = false

  ngOnInit(): void {
  }

}
