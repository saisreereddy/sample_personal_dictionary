import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpageviewComponent } from './fullpageview.component';

describe('FullpageviewComponent', () => {
  let component: FullpageviewComponent;
  let fixture: ComponentFixture<FullpageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullpageviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullpageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
