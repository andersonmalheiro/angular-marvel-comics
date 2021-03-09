import { Component, Input, OnInit } from '@angular/core';
import { Comic } from 'src/app/api/models';
import { FavouriteService } from '../../pages/home/favourite.service';

@Component({
  selector: 'app-comic-list-grid',
  templateUrl: './comic-list-grid.component.html',
  styleUrls: ['./comic-list-grid.component.scss'],
})
export class ComicListGridComponent implements OnInit {
  @Input() data: Comic[] = [];

  constructor() {}

  ngOnInit() {}

  public favComic(comic: Comic) {
    FavouriteService.toggleFavouriteComic(comic);
  }
}
