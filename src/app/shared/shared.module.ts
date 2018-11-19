import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { DummyService } from '../dummy.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [

  ],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DummyService
      ]
    };
  }
}
