import { Component, Input, OnInit } from '@angular/core';
import { Comic } from 'src/app/api/models';

@Component({
  selector: 'app-comic-list-grid',
  templateUrl: './comic-list-grid.component.html',
  styleUrls: ['./comic-list-grid.component.scss'],
})
export class ComicListGridComponent implements OnInit {
  @Input() data: Comic[] = [];

  constructor() {}

  ngOnInit() {}
}
