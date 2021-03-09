import { BehaviorSubject, Observable } from 'rxjs';
import { Comic } from 'src/app/api/models';

export class FavouriteService {
  private static subject: BehaviorSubject<Comic[]> = new BehaviorSubject<
    Comic[]
  >([]);

  public static get data(): Comic[] {
    return this.subject.value;
  }

  public static get stream(): Observable<Comic[]> {
    return this.subject.asObservable();
  }

  private static storageKey = '@marvel-comics-favs';

  public static get favIds(): number[] {
    return this.data.map((item) => item.id);
  }

  constructor() {}

  public static toggleFavouriteComic(comic: Comic) {
    comic.selected = !comic.selected;
    if (comic.selected) {
      this.subject.next([...this.data, comic]);
    } else {
      this.subject.next(this.data.filter((item) => item.id !== comic.id));
    }

    this.updateStorage();
  }

  private static updateStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }

  public static restoreDataFromStorage() {
    const favs = localStorage.getItem(this.storageKey);

    if (favs) {
      const parsed = JSON.parse(favs) as Comic[];

      if (parsed && parsed.length) {
        this.subject.next(parsed);
      }
    }
  }

  public static clearFavourites() {
    this.subject.next([]);
    this.updateStorage();
  }
}
