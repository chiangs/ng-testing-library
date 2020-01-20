import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { coreReducer } from './core-state-reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('core', coreReducer)]
})
export class CoreStoreModule {}
