---
title: Angular CDK Accordion
description: Uma das features escondidas do Angular CDK.
thumbnail: assets/images/guiseek-thumbnail.jpg
cover: /assets/logos/material.svg
video: null
keywords:
  - angular
  - cdk
  - material
author: Guilherme Siquinelli
mail: guiseek@gmail.com
published: true
updated: 2020-03-01
publishedOn: 2020-03-01T00:00:00.000Z
---

# Angular CDK Accordion

> ___Angular CDK___
> Pra quem ainda não conhece o `@ngular/cdk`, vejo como uma sábia decisão da equipe. Ele não chega até a implementação de templates. Mas aborda requisitos muito importantes, facilitando o desenvolvimento de comportamentos comuns entre aplicações. Como `Overlays`, `Tables`, `A11y`, `DragDrop` e etc...

Agora que já foram apresentados, vamos refletir sobre possíveis benefícios.

1. Segregação de responsabilidades
2. Menos `rewrite` de css pra adequação de identidade visual _(por outro lado, você precisa escrever seu estilo praticamente do zero)_
3. Menos desculpas pra avançar com implementações de ___acessibilidade___.
4. calma aí... vamos listar todas as features.

<details open>
  <summary>
  Common Behaviors
  <small>Tools for implementing common application features</small>
  </summary>
  <p>
  Tools for implementing common application features

  - Accessibility
  - Bidirectionality
  - Clipboard
  - Drag and Drop
  - Layout
  - Observers
  - Overlay
  - Platform
  - Portal
  - Scrolling
  - Text field
  </p>
</details>

----------
> __Components__
> <details open>
>  <summary>
>  Untyled components with useful functionality
>   </summary>
>   <p>
>
>     - Stepper
>     - Table
>     - Tree
>   </p>
> </details>
>

----------

<details open>
  <summary>
  Testing
  <small>Utilities for testing common components</small>
  </summary>
  <p>

  - Component test harnesses
  </p>
</details>


```bash
├── app
│   ├── css
│   │   ├── **/*.css
│   ├── favicon.ico
│   ├── images
│   ├── index.html
│   ├── js
│   │   ├── **/*.js
│   └── partials/template
├── dist (or build)
├── node_modules
├── bower_components (if using bower)
├── test
├── Gruntfile.js/gulpfile.js
├── README.md
├── package.json
├── bower.json (if using bower)
└── .gitignore
```

- Common Behaviors


```ts
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  imports: [CommonModule, CdkAccordionModule, MatRippleModule],
  declarations: [AccordionComponent, AccordionItemComponent],
  exports: [AccordionComponent, AccordionItemComponent]
})
export class CommonUiCdkAccordionModule {}
```


```ts
import { Component, ViewEncapsulation } from '@angular/core';
import { CdkAccordion } from '@angular/cdk/accordion';

@Component({
  selector: 'ui-accordion',
  template: `
    <ng-content select="ui-accordion-item"></ng-content>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      ui-accordion {
        display: block;
        width: 100%;
      }
    `
  ]
})
export class AccordionComponent extends CdkAccordion {}
```

```ts
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'ui-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('bodyExpansion', [
      state('false', style({ height: '0px', visibility: 'hidden' })),
      state('true', style({ height: '*', visibility: 'visible' })),
      transition('true <=> false', animate('300ms ease-in-out'))
    ]),
    trigger('indicatorRotate', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(180deg)' })),
      transition('true <=> false', animate('300ms ease-in-out'))
    ])
  ]
})
export class AccordionItemComponent extends CdkAccordionItem {
  @Input() title: string;

  @Input() expanded = false;
}
```

```html
<header (click)="toggle()">
  <h3 class="mat-subheader" matRipple matRippleColor="rgba(0,0,0,.1)">
    {{ title }}

    <i class="material-icons" [@indicatorRotate]="expanded"
      >keyboard_arrow_down</i
    >
  </h3>
</header>
<div class="content" [@bodyExpansion]="expanded">
  <div class="content-body">
    <ng-content></ng-content>
  </div>
</div>
```

```scss
@import 'libs/common/ui/kit/src/lib/scss/core/config';

ui-accordion-item {
  display: block;
  // box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  header {
    display: flex;
    flex-direction: row;
    align-items: center;

    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    > h3.mat-subheader {
      padding: 0 16px;
      min-height: 48px;
      margin: 0;
      justify-content: space-between;
      font-weight: 500;
      line-height: 16px;
      flex: 1 0 auto;
    }
  }
  .content {
    overflow: auto;

    .content-body {
      padding: 16px;
    }
  }
}

.dark header > h3.mat-subheader {
  color: rgba($white-color, 0.6);
  > i {
    color: rgba($red-color, 0.6);
  }

  &:hover {
    color: $white-color;
    > i {
      color: $red-color;
    }
  }
}
```