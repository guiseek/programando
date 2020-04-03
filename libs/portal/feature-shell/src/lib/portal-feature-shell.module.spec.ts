import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureShellModule } from './portal-feature-shell.module';

describe('PortalFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureShellModule).toBeDefined();
  });
});
