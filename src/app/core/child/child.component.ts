import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p data-testid="component-child">This is: {{ label }}</p>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() label: string;

  constructor() {}

  ngOnInit() {}
}
