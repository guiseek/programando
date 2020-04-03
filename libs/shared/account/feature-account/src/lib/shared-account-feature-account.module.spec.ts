import { async, TestBed } from '@angular/core/testing';
import { SharedAccountFeatureAccountModule } from './shared-account-feature-account.module';

describe('SharedAccountFeatureAccountModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAccountFeatureAccountModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAccountFeatureAccountModule).toBeDefined();
  });
});
