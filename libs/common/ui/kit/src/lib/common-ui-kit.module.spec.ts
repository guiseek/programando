import { async, TestBed } from '@angular/core/testing';
import { CommonUiKitModule } from './common-ui-kit.module';

describe('CommonUiKitModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiKitModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiKitModule).toBeDefined();
  });
});
