import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  value: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.value = 'component A value';
  }

  sendToB(data) {
    this.messageService.sendMessage(data);
  }
}
