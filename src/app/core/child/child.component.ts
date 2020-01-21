import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  animate,
  style,
  group,
  query,
  transition,
  trigger,
  state,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-child',
  template: `
    <p data-testid="component-child">
      This is: <span [@openClose]="{ value: label }">{{ label }}</span>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./child.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 0
        })
      ),
      state(
        'close',
        style({
          opacity: 1
        })
      ),
      // ...
      transition('* => *', [
        animate(
          '1.5s ease-in-out',
          keyframes([style({ opacity: 0 }), style({ opacity: 1 })])
        )
      ])
    ])
  ]
})
export class ChildComponent implements OnInit {
  @Input() label: string;

  constructor() {}

  ngOnInit() {}
}
