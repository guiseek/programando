import { async, TestBed } from '@angular/core/testing';
import { CommonUiCdkAccordionModule } from './common-ui-cdk-accordion.module';

describe('CommonUiCdkAccordionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiCdkAccordionModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiCdkAccordionModule).toBeDefined();
  });
});
