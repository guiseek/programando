/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { Directive, HostListener, Input, Optional } from '@angular/core';
import { PopoverRef } from './popover-ref';

@Directive({
  selector: '[uiPopoverClose], ui-popover-close'
})
export class PopoverCloseDirective<T = any> {
  @Input('uiPopoverClose') popoverResult: T;

  constructor(@Optional() private popoverRef: PopoverRef<T>) {}

  @HostListener('click') onClick(): void {
    console.log('close')
    if (!this.popoverRef) {
      console.error('uiPopoverClose is not supported within a template');
      return;
    }

    this.popoverRef.close(this.popoverResult);
  }
}
