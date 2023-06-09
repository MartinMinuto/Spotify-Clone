import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './Components/media-player/media-player.component';
import { HeaderUserComponent } from './Components/header-user/header-user.component';
import { CardPlayerComponent } from './Components/card-player/card-player.component';
import { SectionGenericComponent } from './Components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './Components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './Components/play-list-body/play-list-body.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
