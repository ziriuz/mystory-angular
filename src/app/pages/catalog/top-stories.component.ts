import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/model/story';
import { Subscription } from 'rxjs';
import { SortBy, CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {

  cloudSrvSubs: Subscription;
  stories: Story[];
  constructor(private cloudService: CloudService) { }

  ngOnInit() {
    this.getStories();
  }
  ngOnDestroy() {
    this.cloudSrvSubs.unsubscribe();
  }

  public getStories(): void {
    this.cloudSrvSubs = this.cloudService.getStories(SortBy.Rating)
    .subscribe(files => {
      this.stories = files;
    });  
  }

}
