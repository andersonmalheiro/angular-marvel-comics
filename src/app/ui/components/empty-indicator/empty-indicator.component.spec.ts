/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {EmptyIndicatorComponent} from './empty-indicator.component';

describe('EmptyIndicatorComponent', () => {
  let component: EmptyIndicatorComponent;
  let fixture: ComponentFixture<EmptyIndicatorComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [EmptyIndicatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyIndicatorComponent);
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
    expect(compiled.querySelector('p').textContent).toContain('No data...');

    component.message = message;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(message);
  });
});
