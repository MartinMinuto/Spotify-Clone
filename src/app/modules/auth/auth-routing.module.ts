import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPagComponent } from './pages/auth-pag/auth-pag.component';

const routes: Routes = [
  {
    path:'login',
    component: AuthPagComponent
  },
  {
    path:'**',
    redirectTo: './auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
