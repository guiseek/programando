import { async, TestBed } from '@angular/core/testing';
import { SharedAccountDataAccessModule } from './shared-account-data-access.module';

describe('SharedAccountDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAccountDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAccountDataAccessModule).toBeDefined();
  });
});
