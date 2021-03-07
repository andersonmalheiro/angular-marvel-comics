import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Comic, ComicFilters } from 'src/app/api/models';
import { ComicsService } from 'src/app/api/services';
import { FilterEvents } from 'src/app/ui/components/filters';
import { clearObject } from 'src/utils';

interface ListState {
  loading: boolean;
  loadingMore: boolean;
  next: boolean;
  offset: number;
  filters?: ComicFilters;
}

const DEFAULT_LIST_CONFIG: ListState = {
  loading: false,
  loadingMore: false,
  next: false,
  offset: 0,
  filters: {},
};

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss'],
})
export class ComicsListComponent implements OnInit {
  public data: Comic[] = [];

  public listState: ListState = JSON.parse(JSON.stringify(DEFAULT_LIST_CONFIG));

  constructor(private comicsService: ComicsService) {}

  ngOnInit() {
    this.loadData();
  }

  public loadData(paginate = false) {
    if (paginate) {
      this.listState.loading = false;
      this.listState.loadingMore = true;
    } else {
      this.listState.loading = true;
      this.listState.loadingMore = false;
    }

    this.comicsService
      .list({
        ...this.listState.filters,
        offset: this.listState.offset,
        limit: 10,
        orderBy: 'title',
      })
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.listState.next = response.total > response.offset;
          this.listState.loading = false;
          this.listState.loadingMore = false;

          if (response && response.results) {
            if (paginate) {
              this.data = [...this.data, ...response.results];
            } else {
              this.data = response.results;
            }
          }
        },
        (err) => {
          this.listState.loading = false;
          this.listState.loadingMore = false;
          console.error(err);
        }
      );
  }

  public loadMore() {
    if (this.listState.next) {
      this.listState.offset += 10;
      this.loadData(true);
    }
  }

  private resetState() {
    this.listState;
  }

  public handleFilterEvents(event: FilterEvents) {
    if (event.action === 'search') {
      this.listState.filters = clearObject(event.data);
      this.listState.offset = 0;
      this.listState.next = false;
      this.loadData();
    } else if (event.action === 'clear') {
      this.listState = JSON.parse(JSON.stringify(DEFAULT_LIST_CONFIG));
      console.log(this.listState);
      this.loadData();
    }
  }
}
