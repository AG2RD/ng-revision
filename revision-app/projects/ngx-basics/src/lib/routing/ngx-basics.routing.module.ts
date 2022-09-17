import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from '../content/content.component';
import { SomeService } from '../content/some.service';
import { FormComponent } from '../form/form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { ServiceInstantiationComponent } from '../service-instantiation/service-instantiation.component';
import { TemplatingComponent } from '../templating/templating.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'content' },
  { path: 'content', component: ContentComponent, providers: [SomeService] },
  { path: 'form', component: FormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'templating', component: TemplatingComponent },
  { path: 'instance', component: ServiceInstantiationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxbasicsRoutingModule {}
