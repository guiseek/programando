/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { Directive, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Directive({
  selector: '[uiTitle]'
})
export class TitleDirective {
  constructor(private title: Title, private meta: Meta) {}

  @Input() set uiTitle(title: string) {
    this.title.setTitle(title || '');
  }

  @Input() set description(description: string) {
    this.meta.updateTag({ content: description || '' }, "name='description'");
  }
}
