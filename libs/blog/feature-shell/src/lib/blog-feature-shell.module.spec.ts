import { async, TestBed } from '@angular/core/testing';
import { BlogFeatureShellModule } from './blog-feature-shell.module';

describe('BlogFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BlogFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BlogFeatureShellModule).toBeDefined();
  });
});
