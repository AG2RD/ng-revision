import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBasicsModule } from 'ngx-basics';
import { NgxUiComponentsModule } from 'ngx-ui-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiComponentsModule,
    NgxBasicsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
