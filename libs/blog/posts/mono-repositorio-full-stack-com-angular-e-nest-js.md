---
title: Mono repositorio full-stack com Angular e NestJS
description: Criando um workspace monorepo desde o inicio
thumbnail: assets/images/guiseek-thumbnail.webp
cover: assets/covers/monorepo-nx.webp
video: null
canonicalUrl: 'https://programando.web.app/posts/mono-repositorio-full-stack-com-angular-e-nest-js'
keywords:
  - angular
  - nest
  - monorepo
  - workspace
  - nx
  - full-stack
author: Guilherme Siquinelli
mail: guiseek@gmail.com
language: pt-br
relevance: 9
published: true
updated: 2020-02-25
publishedOn: 2020-02-25T00:00:00.000Z
---

# Mono repositorio full-stack com Angular e NestJS

### Neste conteúdo vamos ver como pode ser rápido inicar um projeto full-stack com Angular e NestJS com ferramentas ainda pouco utilizadas no mercado, com um potêncial incrível!

> **NOTA**
> Com certeza essa ou outras ferramentas com o mesmo nível de agilidade, somando seu poder de gerenciamento para aplicações e bibliotecas compartilhadas serão adotadas pelo mercado.

### Vamos ver do que eu estou falando.

```sh
npx create-nx-workspace nx-pro
```

Então, selecione `angular-nest`

```sh
? What to create in the new workspace (Use arrow keys)
  empty             [an empty workspace]
  web components    [a workspace with a single app built using web components]
  angular           [a workspace with a single Angular application]
❯ angular-nest      [a workspace with a full stack application (Angular + Nest)]
  react             [a workspace with a single React application]
  react-express     [a workspace with a full stack application (React + Express)]
  next.js           [a workspace with a single Next.js application]
```

> **NOTA**
> Poderíamos iniciar um projeto limpo ou com qualquer uma das opções apresentadas, vamos seguir com `angular-nest`. Outros apps podem ser adicionados conforme o cresce.

Em seguida você tem que preencher o nome do seu `app frontend angular`, vou usar `webapp`.

```sh
? Application name webapp
```

Agora nosso processador de estilos, vamos de `scss`.

```sh
? Default stylesheet format
  CSS
❯ SASS(.scss)  [ http://sass-lang.com   ]
  Stylus(.styl)[ http://stylus-lang.com ]
  LESS         [ http://lesscss.org     ]
```

Agora nosso `workspace` está sendo criado.

```sh
Creating a sandbox with Nx...
⢀ @nrwl/cli@8.11.2
```

## OK?

Acesso o diretório do projeto criado

```sh
cd nx-pro
```

> **Recomendo**
> Abra o projeto no VSCode ou seu editor preferido.

Podemos ver alguns schematics e builders disponíveis no projeto

```sh
npm run nx list

# ou

yarn nx list

# ou

npx nx list
```

Pessoalmente eu prefiro usar o `yarn`, e não é _hype_, percebo que ele resolve as dependências de forma mais assertiva.

Seu `nx list` deve ter retornado algo assim:

```sh
$ nx list

>  NX  Installed plugins :

  @angular-devkit/build-angular (builders)
  @nestjs/schematics (schematics)
  @nrwl/angular (schematics)
  @nrwl/cypress (builders,schematics)
  @nrwl/jest (builders,schematics)
  @nrwl/linter (builders)
  @nrwl/nest (schematics)
  @nrwl/node (builders,schematics)
  @nrwl/workspace (builders,schematics)
  @schematics/angular (schematics)
  @schematics/update (schematics)


>  NX  Also available :

  @nrwl/express (builders,schematics)
  @nrwl/next (builders,schematics)
  @nrwl/react (builders,schematics)
  @nrwl/storybook (builders,schematics)
  @nrwl/web (builders,schematics)


>  NX   NOTE  Use "nx list [plugin]" to find out more

✨  Done in 2.17s.
```

Plugins instalado e outros ainda disponíveis pra instalação. seguimos já servindo. Acretite ou não, já temos um `frontend` e um `backend` funcionando, _já com requisição `HTTP` e `CORS`_!

```sh
ng serve api
```

Abra outro terminal

```sh
ng serve webapp -o
```

o parâmetro `-o` diz pro ng abrir o app no browser assim que concluir o compile.

Perceba que o nome deve ser o mesmo que deu pra aplicação no inicio.

Ao concluir verá algo como:

### Welcome to webapp!

![NX](/assets/logos/nx.svg)
`Message: { "message": "Welcome to api!" }`

Prático, não?


**_c-ya_**

`[]s`

----------

<!-- Este será uma série de posts relacionados, no próximo vamos criar uma biliotéca compartilhada e comentar alguns `patterns` relacionados, ok? -->

> **Update**:
> _Adicionei um passo já como sendo segundo, pois vou mostrar como vamos migrar a versão do workspace para o **Angular 9**, assim aproveitamos pra usar novas feature dentro desse projeto._
>
> Vou mostrar como funciona o `nx migrate` na prática.


1. [Criando um workspace monorepo desde o inicio](/posts/mono-repositorio-full-stack-com-angular-e-nest-js)
2. [Atualizando um workspace monorepo para Angular 9](/posts/mono-repositorio-full-stack-com-angular-e-nest-js-parte-2-update-angular-v9)

<!-- 3. Compartilhando código e criando bibliotecas
4. Gráfico de dependências, tasks `affected:*` -->
