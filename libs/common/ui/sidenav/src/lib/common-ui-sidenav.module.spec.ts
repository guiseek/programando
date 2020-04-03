import { async, TestBed } from '@angular/core/testing';
import { CommonUiSidenavModule } from './common-ui-sidenav.module';

describe('CommonUiSidenavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiSidenavModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiSidenavModule).toBeDefined();
  });
});
