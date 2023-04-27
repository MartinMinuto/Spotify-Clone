import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-pag',
  templateUrl: './tracks-pag.component.html',
  styleUrls: ['./tracks-pag.component.css']
})
export class TracksPagComponent implements OnInit, OnDestroy {
   tracksTrending:Array<TrackModel> = []
   tracksRandom:Array<TrackModel> = []

   listObservers$: Array<Subscription> = []

   constructor(private trackService: TrackService) { }

   ngOnInit(): void {
     const observer1$ = this.trackService.dataTracksTrending$
     .subscribe((response: TrackModel[]) => {
      this.tracksTrending = response
     })

     const observer2$ = this.trackService.dataTracksRandom$
     .subscribe((response: any) => {
      this.tracksRandom = [...this.tracksRandom, ...response]
     })

     this.listObservers$ = [observer1$, observer2$]
   }

   ngOnDestroy(): void {
     this.listObservers$.forEach(u => u.unsubscribe())
   }

}
