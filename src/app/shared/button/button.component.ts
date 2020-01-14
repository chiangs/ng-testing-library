import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      data-testid="app-button"
      type="button"
      (click)="onButtonClick()"
      class="button"
    >
      {{ buttonLabel }}
    </button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonLabel;
  @Output() clickHandler: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    console.log(this.buttonLabel);
  }

  onButtonClick = () => this.clickHandler.emit('button clicked');
}
