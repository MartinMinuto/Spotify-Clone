import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPagComponent } from './pages/tracks-pag/tracks-pag.component';


@NgModule({
  declarations: [
    TracksPagComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule
  ]
})
export class TracksModule { }
