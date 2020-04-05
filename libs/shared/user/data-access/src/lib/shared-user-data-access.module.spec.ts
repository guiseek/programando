import { async, TestBed } from '@angular/core/testing';
import { SharedUserDataAccessModule } from './shared-user-data-access.module';

describe('SharedUserDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUserDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUserDataAccessModule).toBeDefined();
  });
});
