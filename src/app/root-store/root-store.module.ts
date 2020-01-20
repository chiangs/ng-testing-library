import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreStoreModule } from '../core/core-store/core-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule {}
