import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPagComponent } from './pages/favorites-pag/favorites-pag.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    FavoritesPagComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }
