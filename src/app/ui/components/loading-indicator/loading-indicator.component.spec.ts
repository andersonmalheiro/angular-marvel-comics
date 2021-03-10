/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoadingIndicatorComponent} from './loading-indicator.component';

describe('LoadingIndicatorComponent', () => {
  let component: LoadingIndicatorComponent;
  let fixture: ComponentFixture<LoadingIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingIndicatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default and custom messages', () => {
    let compiled: any;
    const message = 'Custom message';

    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Loading...');

    component.message = message;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(message);
  });
});
