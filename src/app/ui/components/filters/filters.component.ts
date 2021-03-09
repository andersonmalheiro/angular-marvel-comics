import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface GenericModel {
  [key: string]: any;
}

export interface FilterEvents {
  action: string;
  data?: any;
}

const DEFAULT_VALUE = {
  issueNumber: '',
  orderBy: '',
  title: '',
};

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: [
    trigger('collapse', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class FiltersComponent implements OnInit {
  public open = true;

  public ordenators: {
    key: string;
    label: string;
  }[] = [
    {
      key: 'title',
      label: 'Title',
    },
    {
      key: 'focDate',
      label: 'FOC Date',
    },
    {
      key: 'onsaleDate',
      label: 'On sale',
    },
    {
      key: 'issueNumber',
      label: 'Issue',
    },
    {
      key: 'modified',
      label: 'Last modified',
    },
  ];

  public formGroup: FormGroup = new FormGroup({
    issueNumber: new FormControl('', [Validators.min(1)]),
    orderBy: new FormControl('', []),
    title: new FormControl('', []),
  });

  @Output() public events: EventEmitter<FilterEvents> = new EventEmitter();

  public get canSearch(): boolean {
    return (
      this.formGroup.dirty &&
      this.formGroup.valid &&
      Object.keys(this.formGroup.value).some((key) => this.formGroup.value[key])
    );
  }

  constructor() {}

  ngOnInit() {}

  public toggleFilters() {
    this.open = !this.open;
  }

  public applyFilters() {
    if (this.formGroup.dirty && this.formGroup.valid) {
      this.events.emit({
        action: 'search',
        data: this.formGroup.value,
      });
    }
  }

  public clearFilters() {
    this.formGroup.reset();
    this.formGroup.setValue(DEFAULT_VALUE);
    this.events.emit({
      action: 'clear',
    });
  }
}
