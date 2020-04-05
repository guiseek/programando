import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDialog } from './settings.dialog';

describe('SettingsDialog', () => {
  let component: SettingsDialog;
  let fixture: ComponentFixture<SettingsDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
