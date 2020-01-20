import { ChildComponent } from './child.component';
import { render } from '@testing-library/angular';

it('renders the component', async () => {
  const component = await render(ChildComponent, {
    componentProperties: {
      label: 'New label'
    }
  });
  const childID = component.getByTestId('component-child');
  const child = component.getByText('This is: New label');
});
