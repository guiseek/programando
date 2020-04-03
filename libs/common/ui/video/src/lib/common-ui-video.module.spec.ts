import { async, TestBed } from '@angular/core/testing';
import { CommonUiVideoModule } from './common-ui-video.module';

describe('CommonUiVideoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiVideoModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiVideoModule).toBeDefined();
  });
});
