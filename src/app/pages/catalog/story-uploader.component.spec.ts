import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryUploaderComponent } from './story-uploader.component';

describe('StoryUploaderComponent', () => {
  let component: StoryUploaderComponent;
  let fixture: ComponentFixture<StoryUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
