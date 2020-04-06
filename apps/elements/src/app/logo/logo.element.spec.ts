import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoElement } from './logo.element';

describe('LogoElement', () => {
  let component: LogoElement;
  let fixture: ComponentFixture<LogoElement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoElement ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
