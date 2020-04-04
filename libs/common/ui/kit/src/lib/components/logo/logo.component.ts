import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  Input
} from '@angular/core';

@Component({
  selector: 'ui-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {
  @HostBinding('style.width') get width() {
    return this.size;
  }
  @HostBinding('style.height') get height() {
    return this.size;
  }

  @Input() size = '512px';

  constructor() {}

  ngOnInit(): void {}
}
