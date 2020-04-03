import { async, TestBed } from '@angular/core/testing';
import { CommonUiNavbarModule } from './common-ui-navbar.module';

describe('CommonUiNavbarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiNavbarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiNavbarModule).toBeDefined();
  });
});
