import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarElement } from './navbar.element';

describe('NavbarElement', () => {
  let component: NavbarElement;
  let fixture: ComponentFixture<NavbarElement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarElement ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
