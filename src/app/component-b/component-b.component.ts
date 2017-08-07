import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  value: string;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
     this.subscription = this.messageService.getMessage()
      .subscribe(message => { this.value = message; })
  }

  ngOnInit() {
    this.value = 'component B value';
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
