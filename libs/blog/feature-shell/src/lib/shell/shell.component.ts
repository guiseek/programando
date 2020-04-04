/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { Component } from '@angular/core';
import { NavItem } from '@webapp/shared/data-access';

@Component({
  selector: 'blog-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  navigation: NavItem[] = [
    {
      icon: 'angular',
      title: 'Angular',
      route: '/',
      queryParams: { keyword: 'angular' }
    },
    {
      icon: 'nx',
      title: 'NX',
      route: '/',
      queryParams: { keyword: 'nx' }
    },
    {
      icon: 'firebase',
      title: 'Firebase',
      route: '/',
      queryParams: { keyword: 'firebase' }
    },
    {
      icon: 'nestjs',
      title: 'NestJS',
      route: '/',
      queryParams: { keyword: 'nestjs' }
    }
  ];
}
