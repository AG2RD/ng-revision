import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiComponentsModule } from '@revision/ngx-ui-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxUiComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
