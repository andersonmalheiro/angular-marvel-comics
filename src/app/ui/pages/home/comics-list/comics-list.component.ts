import { Component, OnInit } from '@angular/core';
import { FilterEvents } from 'src/app/ui/components/filters';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss'],
})
export class ComicsListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public handleFilterEvents(event: FilterEvents) {
    console.log(event);
  }
}
