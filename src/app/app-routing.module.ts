import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent, NewObservableComponent } from './demos';

const routes: Routes = [
  { path: 'basics', component: BasicsComponent },
  { path: 'new-observable', component: NewObservableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
