import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { ComicsService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marvel-comics-angular';

  constructor(private comicService: ComicsService) {}

  ngOnInit(): void {
    this.comicService
      .list({ limit: 10 })
      .pipe(take(1))
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => {
          console.error(err);
        }
      );
  }
}
