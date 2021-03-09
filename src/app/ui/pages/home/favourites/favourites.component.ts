import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Comic } from 'src/app/api/models';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  public data: Comic[] = [];

  private onDestroySubject$: Subject<void> = new Subject();

  constructor() {}

  ngOnInit() {
    this.data = FavouriteService.data;

    FavouriteService.stream
      .pipe(takeUntil(this.onDestroySubject$))
      .subscribe((response) => {
        this.data = response;
      });
  }

  ngOnDestroy(): void {
    this.onDestroySubject$.next();
    this.onDestroySubject$.complete();
  }

  public clearFavourites() {
    FavouriteService.clearFavourites();
  }
}
