import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorbadrequestComponent } from './errorbadrequest.component';

describe('ErrorbadrequestComponent', () => {
  let component: ErrorbadrequestComponent;
  let fixture: ComponentFixture<ErrorbadrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorbadrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorbadrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
