import { async, TestBed } from '@angular/core/testing';
import { CommonUiNavModule } from './common-ui-nav.module';

describe('CommonUiNavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiNavModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiNavModule).toBeDefined();
  });
});
