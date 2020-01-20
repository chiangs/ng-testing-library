import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [AppComponent, ContainerComponent, ChildComponent],
  imports: [SharedModule, CommonModule, AppRoutingModule],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class CoreModule {}
