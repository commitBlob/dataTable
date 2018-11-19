// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App specific
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// External
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
