import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>This is: {{ label }}</p>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() label: string;

  constructor() {}

  ngOnInit() {}
}
