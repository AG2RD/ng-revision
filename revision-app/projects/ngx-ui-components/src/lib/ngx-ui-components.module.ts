import { NgModule } from '@angular/core';
import { NgxUiComponentsComponent } from './ngx-ui-components.component';
import { VcfiltersComponent } from './vcfilters/vcfilters.component';
import { VccfiltersComponent } from './vccfilters/vccfilters.component';



@NgModule({
  declarations: [
    NgxUiComponentsComponent,
    VcfiltersComponent,
    VccfiltersComponent
  ],
  imports: [
  ],
  exports: [
    NgxUiComponentsComponent
  ]
})
export class NgxUiComponentsModule { }
