import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardElement } from './post-card.element';

describe('PostCardElement', () => {
  let component: PostCardElement;
  let fixture: ComponentFixture<PostCardElement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCardElement ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
