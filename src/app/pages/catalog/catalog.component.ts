import { Component, OnInit } from '@angular/core';
import { Group } from '../../model/group';
import { CatalogService } from '../../services/catalog.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  subs: Subscription;
  selectedGroupId: number;
  groups$: Observable<Group[]>;

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getGroups();
    this.subs = this.catalogService.selectedGroupId$.pipe(
      delay(0)
    ).subscribe(
      id => this.selectedGroupId = id
    );
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  getGroups(): void {
    this.groups$ = this.catalogService.getGroups();
  }
}
