import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { UseEffect, UseState } from '../decorators/hooks.decorator';
import { SetState } from '../decorators/state.decorator';

@Component({
  selector: 'web-dropdown',
  templateUrl: './dropdown.element.html',
  styleUrls: ['./dropdown.element.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownElement implements OnInit, AfterViewChecked {

  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef,
  ) { }

  // @UseState(0) open; setOpen;

  open: boolean;

  @SetState()
  toggle(val?) {
    this.open = val || !this.open;
  }

  @SetState()
  changeActive(val = 'main') {
    this.activeMenu = val;
  }

  @UseState('main') activeMenu; setActiveMenu;

  @UseEffect()
  onEffect() {
    console.log('log: ', this.activeMenu);

  }

  setActive(active) {
    console.log(active);
    this.activeMenu = active;
    this.cd.detectChanges()
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    console.log('checked');

  }
}
