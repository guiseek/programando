import { async, TestBed } from '@angular/core/testing';
import { SharedAccountFeatureModule } from './shared-account-feature.module';

describe('SharedAccountFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAccountFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAccountFeatureModule).toBeDefined();
  });
});
