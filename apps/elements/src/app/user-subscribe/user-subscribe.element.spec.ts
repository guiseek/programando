import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubscribeElement } from './user-subscribe.element';

describe('UserSubscribeElement', () => {
  let component: UserSubscribeElement;
  let fixture: ComponentFixture<UserSubscribeElement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubscribeElement ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubscribeElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
