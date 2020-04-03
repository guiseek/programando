import { async, TestBed } from '@angular/core/testing';
import { CommonUiToolbarModule } from './common-ui-toolbar.module';

describe('CommonUiToolbarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiToolbarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiToolbarModule).toBeDefined();
  });
});
