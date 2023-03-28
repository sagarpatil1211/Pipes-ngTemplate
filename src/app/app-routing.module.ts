import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgTemplatesComponent } from './ng-templates/ng-templates.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path:'', component:PipesComponent},
  {path:'pipes', component:PipesComponent},
  {path:'ngtemplate', component:NgTemplatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
