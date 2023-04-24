import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './Components/media-player/media-player.component';
import { HeaderUserComponent } from './Components/header-user/header-user.component';
import { CardPlayerComponent } from './Components/card-player/card-player.component';
import { SectionGenericComponent } from './Components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ]
})
export class SharedModule { }
