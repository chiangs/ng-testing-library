import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button data-testid="app-button" type="button" (click)="onButtonClick()">
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Output() clickHandler: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onButtonClick = () => this.clickHandler.emit('button clicked');
}
