import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-pag',
  templateUrl: './tracks-pag.component.html',
  styleUrls: ['./tracks-pag.component.css']
})
export class TracksPagComponent implements OnInit {
   mockTracksList:Array<TrackModel> = [

   ]

   ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.mockTracksList = data;
   }

}
