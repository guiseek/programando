import { async, TestBed } from '@angular/core/testing';
import { CommonUiBrandModule } from './common-ui-brand.module';

describe('CommonUiBrandModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiBrandModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiBrandModule).toBeDefined();
  });
});
