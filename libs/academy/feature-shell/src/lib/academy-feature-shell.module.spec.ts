import { async, TestBed } from '@angular/core/testing';
import { AcademyFeatureShellModule } from './academy-feature-shell.module';

describe('AcademyFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AcademyFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AcademyFeatureShellModule).toBeDefined();
  });
});
