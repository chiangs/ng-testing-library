import { ChildComponent } from './child.component';
import { render } from '@testing-library/angular';

it('renders the component', async () => {
  const component = await render(ChildComponent, {
    componentProperties: {
      label: 'New label'
    }
  });
  const child = component.getByTestId('component-child');
  expect(child.textContent).toBe('This is: New label');
});
