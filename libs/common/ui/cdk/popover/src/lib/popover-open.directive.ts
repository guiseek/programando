/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { ComponentType } from '@angular/cdk/portal';
import { Directive, ElementRef, HostListener, Input, Optional, TemplateRef } from '@angular/core';
import { PopoverRef } from './popover-ref';
import { UiPopoverService } from './popover.service';

@Directive({
  selector: '[uiPopoverOpen]'
})
export class PopoverOpenDirective<T = any> {
  @Input('uiPopoverOpen') popoverOpen: ComponentType<any> | TemplateRef<any>;
  @Input() popoverData: any;
  @Input() popoverAnchor: EventTarget;

  constructor(
    public elementRef: ElementRef,
    @Optional() private popoverRef: PopoverRef<T>,
    private service: UiPopoverService
  ) {}

  @HostListener('click')
  onClick(): void {
    const eTarget = this.popoverAnchor
      ? this.popoverAnchor
      : this.elementRef.nativeElement;

    this.service.open(this.popoverOpen, eTarget, { data: this.popoverData });
  }
}
