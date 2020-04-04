import { async, TestBed } from '@angular/core/testing';
import { SharedUtilBrowserModule } from './shared-util-browser.module';

describe('SharedUtilBrowserModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilBrowserModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilBrowserModule).toBeDefined();
  });
});
