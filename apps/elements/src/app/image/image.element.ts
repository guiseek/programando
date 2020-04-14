import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'web-image',
  templateUrl: './image.element.html',
  styleUrls: ['./image.element.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ImageElement implements OnInit {

  constructor(private el: ElementRef<HTMLElement>, private cd: ChangeDetectorRef) { }

  @Input() src: string;
  @Input() alt: string = '';
  @Input() aspectRatio: string = '16/9';

  @Output() isVisible = new EventEmitter();

  state = {
    visible: false,
    loaded: false
  }

  private setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }
  show() {
    this.setState('visible', true);
  }
  calcVisibility() {
    const top = this.el.nativeElement.getBoundingClientRect().top;
    if (top <= window.innerHeight && !this.state.visible) {
      this.setState('visible', true);
      this.customEmit(true);
    }
  }
  ngOnInit(): void {
    this.calcVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.calcVisibility();
  }

  onLoad() {
    this.setState('loaded', true);
  }

  @Input()
  public log = () => console.log(this.state);

  customEmit(val) {
    this.isVisible.emit(val);
    const domEvent = new CustomEvent('is-visible');
    this.el.nativeElement.dispatchEvent(domEvent);
  }
}
