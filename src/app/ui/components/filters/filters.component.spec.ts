/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match filter values', () => {
    fixture.detectChanges();
    const instance = fixture.componentInstance;
    expect(instance.canSearch).toBe(false);

    const testValue = {
      issueNumber: 12,
      orderBy: 'title',
      title: 'iron man',
    };

    fixture.whenStable().then(() => {
      const title = fixture.debugElement.query(By.css('#title')).nativeElement;
      const issue = fixture.debugElement.query(By.css('#issueNumber'))
        .nativeElement;
      const orderBy = fixture.debugElement.query(By.css('#orderBy'))
        .nativeElement;

      title.value = 'iron man';
      title.dispatchEvent(new Event('input'));
      issue.value = '12';
      issue.dispatchEvent(new Event('input'));
      orderBy.value = 'title';
      orderBy.dispatchEvent(new Event('change'));

      expect(instance.formGroup.value).toEqual(testValue);
    });
  });

  it('should clear filter values', () => {
    const testValue = {
      issueNumber: '',
      orderBy: '',
      title: '',
    };

    fixture.detectChanges();
    const instance = fixture.componentInstance;
    expect(instance.canSearch).toBe(false);

    fixture.whenStable().then(() => {
      let titleInput = fixture.debugElement.query(By.css('#title'))
        .nativeElement;

      titleInput.value = 'iron man';
      titleInput.dispatchEvent(new Event('input'));

      expect(instance.formGroup.value['title']).toBe('iron man');

      instance.clearFilters();
      fixture.detectChanges();
      expect(instance.formGroup.value).toEqual(testValue);
    });
  });

  it('should toggle filters', () => {
    fixture.detectChanges();
    const instance = fixture.componentInstance;
    expect(instance.open).toEqual(true);

    fixture.whenStable().then(() => {
      instance.toggleFilters();
      fixture.detectChanges();

      expect(instance.open).toEqual(false);
      const form = fixture.debugElement.query(By.css('#filters_form'));

      expect(form).toBeFalsy();
    });
  });
});
