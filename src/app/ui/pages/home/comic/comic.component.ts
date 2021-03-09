import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Comic } from 'src/app/api/models';
import { ComicsService } from 'src/app/api/services';

interface CharacterDetails {
  name: string;
  description: string;
  thumbnail: string;
}

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  public comic!: Comic;

  public loading = false;

  public bgImage?: string;

  public error?: HttpErrorResponse;

  public characters: CharacterDetails[] = [];

  public dateTypes: { [key: string]: string } = {
    onsaleDate: 'On Sale',
    focDate: 'FOC Date',
    unlimitedDate: 'Unlimited Date',
    digitalPurchaseDate: 'Digital purchase',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private comicsService: ComicsService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;

    if (id) {
      this.loadData(id);
    }
  }

  public loadCharacters() {
    const { characters } = this.comic;

    if (characters && characters.items.length) {
      characters.items.forEach((character) => {
        this.httpClient
          .get(character.resourceURI)
          .pipe(take(1))
          .subscribe(
            (response: any) => {
              const [result] = response.results;

              if (result) {
                const character: CharacterDetails = {
                  description: result.description,
                  name: result.name,
                  thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
                };

                this.characters.push(character);
              }
            },
            (err) => {
              console.error(err);
            }
          );
      });
    }
  }

  public loadData(id: number) {
    this.loading = true;
    this.comicsService
      .getByID(id)
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.loading = false;
          if (response.results && response.results.length === 1) {
            const [comic] = response.results;
            this.comic = comic;

            const { dates } = comic;

            if (dates) {
              dates.forEach((dateObj) => {
                const convertedDate = new Date(dateObj.date);
                if (Number.isNaN(convertedDate.getTime())) {
                  dateObj.date = '';
                }
              });
            }

            const [image] = comic.images;

            if (image) {
              this.bgImage = `url(${image.path + '.' + image.extension})`;
            }

            this.loadCharacters();
          }
        },
        (err) => {
          this.error = err;
          this.loading = false;
        }
      );
  }
}
