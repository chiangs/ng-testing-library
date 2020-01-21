import { ContainerComponent } from './container.component';
import { render } from '@testing-library/angular';
import { ChildComponent } from '../child/child.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { StoreModule } from '@ngrx/store';
import { CoreSelectors } from '../core-store';
import { coreReducer } from '../core-store/core-state-reducer';

it('renders the component and is connected to the store', async () => {
  const component = await render(ContainerComponent, {
    imports: [
      StoreModule.forRoot(
        {
          core: coreReducer
        },
        {
          runtimeChecks: {}
        }
      )
    ],
    declarations: [ChildComponent, ButtonComponent]
  });
  const button = component.getByTestId('app-button');
  const child = component.getByTestId('component-child');
  expect(button.textContent).toBe(' Button ');
  expect(child.textContent).toBe('This is: core-store');

  component.click(button);
  expect(child.textContent).toBe('This is: updated');
});
