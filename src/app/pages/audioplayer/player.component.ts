import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AudioService } from "../../services/audio.service";
import { StreamState } from "../../interfaces/stream-state";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input()  currentFile: any;
  @Output() action = new EventEmitter<string>();

  state: StreamState;
  audioStateSubs: Subscription;

  constructor(
    public audioService: AudioService
  ) {
    // listen to stream state
    this.audioStateSubs = this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.audioStateSubs.unsubscribe();
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    this.action.emit("next");
  }

  previous() {
    this.action.emit("previous");
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.isLast;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

}
