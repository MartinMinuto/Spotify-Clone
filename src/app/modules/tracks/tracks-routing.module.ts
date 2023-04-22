import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPagComponent } from './pages/tracks-pag/tracks-pag.component';

const routes: Routes = [
  {
    path:'',
    component: TracksPagComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
