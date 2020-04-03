import { async, TestBed } from '@angular/core/testing';
import { CommonUiCdkPopoverModule } from './common-ui-cdk-popover.module';

describe('CommonUiCdkPopoverModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiCdkPopoverModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiCdkPopoverModule).toBeDefined();
  });
});
