import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, CommonModule, AppRoutingModule],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class CoreModule {}
