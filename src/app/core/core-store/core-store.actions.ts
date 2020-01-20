import { Action } from '@ngrx/store';

export enum ActionTypes {
  Verb1 = '[Core] Test',
  Verb2 = '[Core] Test2'
}

export class TestAction implements Action {
  readonly type = ActionTypes.Verb1;
  constructor(public payload: string) {}
}

export class Test2Action implements Action {
  readonly type = ActionTypes.Verb2;
  constructor(public readonly payload?: any) {}
}

export type Actions = TestAction | Test2Action;
