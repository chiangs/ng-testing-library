import { ButtonComponent } from './button.component';
import { render } from '@testing-library/angular';

it('renders the button and emits a click when clicked', async () => {
  const clickSpy = jasmine.createSpy('click');
  const component = await render(ButtonComponent, {
    componentProperties: {
      label: 'Test Button Label',
      clickHandler: {
        emit: clickSpy
      } as any
    }
  });

  const buttonByID = component.getByTestId('app-button');
  const button = component.getByText('Test Button Label');
  component.click(button);
  expect(clickSpy).toHaveBeenCalledWith('button clicked');
  expect(clickSpy).toHaveBeenCalled();
});
