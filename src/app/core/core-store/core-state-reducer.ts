import { initialState, CoreState } from './core-state.state';
import { Actions, ActionTypes } from './core-store.actions';

const updateProps = (state: CoreState, props: any): CoreState => ({
  ...state,
  ...props
});

const verb1 = (state, action): CoreState => {
  const updatedProps = {
    testProp: `updated`
  };
  return updateProps(state, updatedProps);
};

export const coreReducer = (
  state: CoreState = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.Verb1:
      return verb1(state, action);
    default:
      return state;
  }
};
