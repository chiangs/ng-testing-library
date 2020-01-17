import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default { title: 'My Button' };

export const withText = () => ({
  component: ButtonComponent,
  props: {
    buttonLabel: `Button`,
    clickHandler: action()
  }
});
