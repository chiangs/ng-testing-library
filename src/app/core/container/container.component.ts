import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoreSelectors, RootState, CoreState } from 'src/app/root-store';
import { TestAction } from '../core-store/core-store.actions';

@Component({
  selector: 'app-container',
  template: `
    <app-child [label]="testProp$ | async"></app-child>
    <app-button
      [buttonLabel]="label"
      (clickHandler)="onButtonClick()"
    ></app-button>
  `
})
export class ContainerComponent implements OnInit {
  testProp$: Observable<string>;
  label: string = 'Button';

  constructor(
    private store$: Store<RootState.State>,
    private coreStore$: Store<CoreState.CoreState>
  ) {}

  ngOnInit() {
    this.testProp$ = this.store$.select(CoreSelectors.selectCoreTestProp);
  }

  onButtonClick = () => this.coreStore$.dispatch(new TestAction('updated'));
}
