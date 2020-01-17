import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  template: `
    <p>
      foo works!
    </p>
  `,
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
