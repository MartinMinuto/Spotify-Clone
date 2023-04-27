import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPagComponent } from './pages/tracks-pag/tracks-pag.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TracksPagComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule
  ]
})
export class TracksModule { }
