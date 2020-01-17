import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [ButtonComponent, FooComponent],
  imports: [CommonModule],
  exports: [ButtonComponent]
})
export class SharedModule {}
