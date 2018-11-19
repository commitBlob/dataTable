import { NgModule } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE, MatButtonModule,
  MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule,
  MatInputModule, MatNativeDateModule,
  MatSelectModule, MatSlideToggleModule,
  MatTabsModule
} from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

const modules = [
  MatTabsModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports:
  [
    ...modules
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class MaterialModule {
}
