import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: MainComponent}, 
  {path: 'forms', component: FormComponent},
  {path: 'ui-elements', component: UiElementsComponent}
]


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
