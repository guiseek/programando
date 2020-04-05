import { async, TestBed } from '@angular/core/testing';
import { SharedUserFeatureModule } from './shared-user-feature.module';

describe('SharedUserFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUserFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUserFeatureModule).toBeDefined();
  });
});
