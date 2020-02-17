import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';
import { Story } from 'src/app/model/story';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {

  subs: Subscription;
  stories: Story[];
  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getStories();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public getStories(): void {
    this.subs =
       this.storyService.getStories().subscribe(
         res => this.stories = res.slice(0,5)
       );
  }

}
