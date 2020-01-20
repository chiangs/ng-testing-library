import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { ContainerComponent } from '../container/container.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ChildComponent } from '../child/child.component';

it('should render title', async () => {
  const component = await render(AppComponent, {
    declarations: [ContainerComponent, ButtonComponent, ChildComponent],
    routes: [{ path: '', component: ContainerComponent, pathMatch: 'full' }]
  });
  component.getByText('Welcome to ng8-testing-library!');
  component.getByText('ng8-testing-library app is running!');
});
