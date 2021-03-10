/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComicListGridComponent } from './comic-list-grid.component';

describe('ComicListGridComponent', () => {
  let component: ComicListGridComponent;
  let fixture: ComponentFixture<ComicListGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicListGridComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a empty indicator when no data is provided', () => {
    fixture.detectChanges();
    const instance = fixture.componentInstance;

    fixture.whenStable().then(() => {
      expect(instance.data).toEqual([]);

      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('p').textContent).toContain('No data...');
    });
  });
});
