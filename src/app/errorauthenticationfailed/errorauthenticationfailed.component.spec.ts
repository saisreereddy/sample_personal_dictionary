import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorauthenticationfailedComponent } from './errorauthenticationfailed.component';

describe('ErrorauthenticationfailedComponent', () => {
  let component: ErrorauthenticationfailedComponent;
  let fixture: ComponentFixture<ErrorauthenticationfailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorauthenticationfailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorauthenticationfailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
