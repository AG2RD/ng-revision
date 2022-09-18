import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChildComponent } from './child/child.component';
import { ContentComponent, MyTargetDirective, Pane } from './content/content.component';
import { FormComponent } from './form/form.component';
import { NgxBasicsComponent } from './ngx-basics.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NgxbasicsRoutingModule } from './routing/ngx-basics.routing.module';
import { ServiceChildComponent } from './service-child/service-child.component';
import { ServiceInstantiationComponent } from './service-instantiation/service-instantiation.component';
import { TemplatingComponent } from './templating/templating.component';
import { TemplatingFormComponent } from './templating-form/templating-form.component';

@NgModule({
  declarations: [
    NgxBasicsComponent,
    TemplatingComponent,
    FormComponent,
    ReactiveFormComponent,
    ContentComponent,
    Pane,
    MyTargetDirective,
    ChildComponent,
    ServiceInstantiationComponent,
    ServiceChildComponent,
    TemplatingFormComponent,
  ],
  imports: [CommonModule, NgxbasicsRoutingModule, FormsModule],
  exports: [
    NgxBasicsComponent,
    TemplatingComponent,
    FormComponent,
    ReactiveFormComponent,
    ContentComponent,
  ],
})
export class NgxBasicsModule {}
