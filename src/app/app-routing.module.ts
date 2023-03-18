import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BasicsComponent} from './demos';

const routes: Routes = [
  {path:'basics', component:BasicsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
