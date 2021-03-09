import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { ComicsService } from './api/services';
import { FavouriteService } from './ui/pages/home/favourite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marvel-comics-angular';

  constructor() {}

  ngOnInit(): void {
    FavouriteService.restoreDataFromStorage();
  }
}
