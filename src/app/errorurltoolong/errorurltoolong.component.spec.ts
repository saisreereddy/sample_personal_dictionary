import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorurltoolongComponent } from './errorurltoolong.component';

describe('ErrorurltoolongComponent', () => {
  let component: ErrorurltoolongComponent;
  let fixture: ComponentFixture<ErrorurltoolongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorurltoolongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorurltoolongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
