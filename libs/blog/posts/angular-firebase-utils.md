---
title: Angular Firebase Utils
description: Funções úteis, pequenas e reutilizáveis
thumbnail: assets/images/guiseek-thumbnail.webp
cover: assets/covers/firebase-utils.webp
video: null
canonicalUrl: 'https://programando.web.app/posts/angular-firebase-utils'
keywords:
  - angular
  - firebase
  - typescript
  - javascript
author: Guilherme Siquinelli
mail: guiseek@gmail.com
published: true
publishedOn: 2020-04-05T00:00:00.000Z
---

# Angular Firebase`.utils.ts`

_Pequena caixa de ferraamentas que fui criando conforme trabalhava em projetos Angular com Firebase._

> __Atenção__
> Eu uso a lib `@angular/fire`, quem ainda não conhece e quer experimentar, basta usar o schematics `ng add @angular/fire` para configura-lo em seu projeto.

### Motivo

1. Você não precisa resolver mais de 1x o mesmo problema;
2. Reduz a repetição de código;
3. Elas ajudam bastante durante o desenvolvimento;

----------

_Então vamos a elas._

## 1. `toDate`
Quando você recupera dados do firebase, os campos de data vem do tipo `Timestamp`, sendo necessário chamar o método `toDate()`.

```ts
// to-date.util.ts

import { firestore } from 'firebase/app';

export const toDate = (value: firestore.Timestamp | Date): Date => {
  if (!value) return;
  return value instanceof firestore.Timestamp ? value.toDate() : value;
};
```

> Casos de uso
> -

### 1.1 `mapToDate`

Quando você precisa fazer o `setValue` ou `patchValue` do documento para o form, o campo de data não preenchera como o esperado, pois ele não reconhece o tipo `Timestamp`, então criei outra função usando a `toDate`.

```ts
// doc-to-date.util.ts

export function docToDate<T = any>(column: string | string[]) {
  return (doc: T): T => {
    Array.isArray(column)
    ? column.map(c => doc[c] = toDate(doc[c]))
    : doc[column] = toDate(doc[column]);
    return doc;
  }
}
```

E também um _operador **rxjs**_

```ts
// map-to-date.operator.ts

export function mapToDate<T = any>(column: string | string[]) {
  return (src: Observable<T>) =>
    src.pipe(map(docToDate(column)));
}
```

Agora podemos usa-los de diversas maneiras:

```ts
export class PatientProfileComponent implements OnInit {
  patient$: Observable<Patient>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {

    this.patient$ = this.afs.collection('pacientes')

      .doc('pacienteX').valueChanges().pipe(

        // Com a função
        map(
          docToDate<Patient>('birthday')
        ),

        // Com o operador
        mapToDate<Patient>(['birthday', 'created']),

        // Então populamos o form
        tap(data => this.form.patchValue(data))

      );
  }
}
```

### 1.2 `toDatePipe`

Podemos criar um pipe com o nome __toDate__, e usarmos direto na _view_.
```ts
// to-date.pipe.ts

import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { toDate } from '@vibe/shared/util/formatting';

@Pipe({
  name: 'toDate'
})
export class ToDatePipe implements PipeTransform {

  constructor(readonly datePipe: DatePipe) { }

  transform(value: any, arg: string = null): string {
    return this.datePipe.transform(

      toDate(value),

      !!arg ? arg : 'mediumDate'

    );
  }s
}
```
Perceba que eu não deixo de usar o `DatePipe` do angular, para conseguir injetalo no _pipe_ você deve adiciona-lo como um _provider_ no modulo onde declarou o _pipe_.

```ts
// seu.module.ts

import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
...

@NgModule({
  providers: [
    DatePipe
  ]
})

export class SeuModule {  }
```

Assim conseguimos continuar formatando a data:

```html
// seu.component.html

<p>
  Criado em: {{ document.created | toDate:'h:mm:ss a' }}
</p>
<!-- Ou simplemente usar o padrão mediumDate definido -->
<p>
  Criado em: {{ document.created | toDate }}
</p>
```

Lembra que na função `toDate` eu faço a comparação verificando se é do tipo `Timestamp`? Agora você pode usar o pipe em todas as situações, pois funciona com `Timestamp` ou `Date` e continuamos usando o `DatePipe` do angular como _provider_.



**_c-ya_**

`[]s`