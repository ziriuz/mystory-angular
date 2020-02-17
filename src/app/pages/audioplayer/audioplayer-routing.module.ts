import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaylistComponent} from './playlist.component';
import {PlayerComponent} from './player.component';

const routes: Routes = [
  { path:'audioplayer', component: PlaylistComponent, data: { showPlayBar: false }  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioPlayerRoutingModule { }
