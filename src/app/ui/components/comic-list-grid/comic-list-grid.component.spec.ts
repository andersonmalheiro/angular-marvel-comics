/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComicListGridComponent } from './comic-list-grid.component';

describe('ComicListGridComponent', () => {
  let component: ComicListGridComponent;
  let fixture: ComponentFixture<ComicListGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicListGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
