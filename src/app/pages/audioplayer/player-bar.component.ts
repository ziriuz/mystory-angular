import { Component, OnInit } from '@angular/core';
import { StreamState } from 'src/app/interfaces/stream-state';
import { Subscription } from 'rxjs';
import { AudioService } from 'src/app/services/audio.service';
import { PersistenceService } from 'src/app/services/persistence.service';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.css']
})
export class PlayerBarComponent implements OnInit {
  currentFile: any;
  state: StreamState;
  audioStateSubs: Subscription;

  constructor(
    public audioService: AudioService,
    private persister: PersistenceService
  ) { 
    this.currentFile = this.persister.get('audio.file');
  }

  ngOnInit() {
    // listen to stream state
    this.audioStateSubs = this.audioService.getState().subscribe(state => {
      this.state = state;
      this.currentFile = this.persister.get('audio.file');
    });
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }  

}
