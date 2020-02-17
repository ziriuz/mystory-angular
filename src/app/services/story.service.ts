import { Injectable } from '@angular/core';
import { Story } from '../model/story';
import { STORIES } from '../data/mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor() { }

  getStories(): Observable<Story[]> {
    return of(STORIES);
  }
}
