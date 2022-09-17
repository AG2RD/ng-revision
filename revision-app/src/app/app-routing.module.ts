import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'basics',
    loadChildren: () => import('ngx-basics').then((m) => m.NgxBasicsModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'basics',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
