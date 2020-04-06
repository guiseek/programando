import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPollElement } from './user-poll.element';

describe('UserPollElement', () => {
  let component: UserPollElement;
  let fixture: ComponentFixture<UserPollElement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPollElement ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPollElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
