import { Component, OnInit } from '@angular/core';
import { AudioService } from "../../services/audio.service";
import { CloudService } from "../../services/cloud.service";
import { PersistenceService } from "../../services/persistence.service";
import { StreamState } from "../../interfaces/stream-state";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  files: Array<any> = [ ];
  currentFile: any = {};
  state: StreamState;
  cloudSrvSubs: Subscription;
  audioStateSubs: Subscription;

  constructor(
     public audioService: AudioService,
     public cloudService: CloudService,
     private persister: PersistenceService
  ) { }

  ngOnInit() {
    console.log("playlist component ngOnInit");
    this.cloudSrvSubs = this.cloudService.getFiles().subscribe(files => {
      this.files = files;
      const index = this.persister.get('audio.id');
      if( index != null){
         const isLast = index === this.files.length - 1;           
         const file = this.files[index];
         this.currentFile = { index, file, isLast };           
      }
    });
    // listen to stream state
    this.audioStateSubs = this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }
  ngOnDestroy() {
    console.log("playlist component ngOnDestroy")
    //this.audioService.stop();
    this.cloudSrvSubs.unsubscribe();
    this.audioStateSubs.unsubscribe();
  }

  playStream(url) {
      this.audioService.playStream(url).subscribe(events => {
        // listening for fun here
      });
  }

  openFile(file, index) {
    const isLast = index === this.files.length - 1
    this.currentFile = { index, file, isLast };
    this.audioService.stop();
    this.persister.set('audio.id', index);
    this.persister.set('audio.file', this.currentFile);
    this.playStream(file.url);
  }
  next() {
    if( !this.currentFile.isLast ) {
      const index = this.currentFile.index + 1;
      const file = this.files[index];
      this.openFile(file, index);
    }
  }
  previous() {
    if( this.currentFile.index > 0 ) {
      const index = this.currentFile.index - 1;
      const file = this.files[index];
      this.openFile(file, index);
    }
  }
  onAction(action: string) {
    switch (action){
      case "next":{
        this.next();
        break;
      }
      case "previous":{
        this.previous();
        break;
      }
      default: break;
    }
  }
}
