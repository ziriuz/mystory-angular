import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardSliderComponent } from './cardslider/card-slider.component';



@NgModule({
  declarations: [CarouselComponent, CardSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    CardSliderComponent
  ]
})
export class UIModule { }
