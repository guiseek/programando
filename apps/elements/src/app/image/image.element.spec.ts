import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageElement } from './image.element';

describe('ImageElement', () => {
  let component: ImageElement;
  let fixture: ComponentFixture<ImageElement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageElement ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
