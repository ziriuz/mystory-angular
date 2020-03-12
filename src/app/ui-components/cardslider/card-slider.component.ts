import { Component, OnInit, Type, Injector, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  @Input() cards: any[];
  @Input() cardTemplateRef: TemplateRef<any>;
  @Input() componentRef: Type<any>;

  constructor() { }

  ngOnInit() {
  }

}
