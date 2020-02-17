import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { PlayerComponent } from './player.component';
import { AudioPlayerRoutingModule } from './audioplayer-routing.module';
import { MaterialModule } from '../../material.module';
import { PlayerBarComponent } from './player-bar.component';

@NgModule({
  declarations: [PlayerComponent, PlaylistComponent, PlayerBarComponent],
  imports: [
    CommonModule,
    AudioPlayerRoutingModule,
    MaterialModule
  ],
  exports: [
    PlayerBarComponent
  ]
})
export class AudioPlayerModule { }
