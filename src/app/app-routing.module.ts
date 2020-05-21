import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorfolioComponent } from './porfolio/porfolio.component';


const routes: Routes = [
  { path: '', component: PorfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
