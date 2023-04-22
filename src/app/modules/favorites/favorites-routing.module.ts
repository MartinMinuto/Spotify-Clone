import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPagComponent } from './pages/favorites-pag/favorites-pag.component';

const routes: Routes = [
  {
    path:'',
    component: FavoritesPagComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
