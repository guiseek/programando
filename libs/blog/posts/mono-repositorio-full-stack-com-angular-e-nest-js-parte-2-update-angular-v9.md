---
title: Mono repositorio full-stack com Angular e NestJS Parte 2 update angular v9
description: Atualizando um workspace monorepo para Angular versão 9
thumbnail: assets/images/guiseek-thumbnail.webp
cover: assets/blog/monorepo.svg
video: G7bW2BNv6oo
canonicalUrl: 'https://programando.web.app/posts/mono-repositorio-full-stack-com-angular-e-nest-js-parte-2-update-angular-v9'
keywords:
  - angular
  - nestjs
  - monorepo
  - workspace
  - nx
  - full-stack
author: Guilherme Siquinelli
mail: guiseek@gmail.com
published: true
updated: 2020-02-26
publishedOn: 2020-02-26T00:00:00.000Z
---

# Mono repositorio full-stack com Angular e NestJS Parte 2 update angular v9

### Quer saber como começar um projeto monorepo usando `NX`?
Vá para este post: [Criando um workspace monorepo desde o inicio](/posts/mono-repositorio-full-stack-com-angular-e-nest-js)

---

> **Nota**
> Na Parte 1, usamos o comando:
>
> ```sh
> npx create-nx-workspace nx-pro
> ```
>
> Então, pode ser que para alguns já tenha sido instalado com a versão **9**, mesmo não tendo usado o `@latest`.
> Quem já está com a **9**, não precisa executar os passos, porém, vale a pena conferir como funciona, _por este motivo colocarei aqui resultados relevantes retornados nos comandos executados._
> Pra conferir basta abrir seu `package.json` em `dependencies`, abaixo vou mostrar um comparativo.
>
> | Versão 8                                                                                                                                                                                                                                                                                                                                                                                                                                     |     | Versão 9                                                                                                                                                                                                                                                                                                                                                                                                                                     |
> | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `"@nrwl/angular": "8.11.2",` <br> `"@angular/animations": "^8.2.0",` <br> `"@angular/common": "^8.2.0",` <br> `"@angular/compiler": "^8.2.0",` <br> `"@angular/core": "^8.2.0",` <br> `"@angular/forms": "^8.2.0",` <br> `"@angular/platform-browser": "^8.2.0",` <br> `"@angular/platform-browser-dynamic": "^8.2.0",` <br> `"@angular/router": "^8.2.0",` <br> `"core-js": "^2.5.4",` <br> `"rxjs": "~6.4.0",` <br> `"zone.js": "^0.9.1",` | e   | `"@nrwl/angular": "9.0.2",` <br> `"@angular/animations": "^9.0.2",` <br> `"@angular/common": "^9.0.2",` <br> `"@angular/compiler": "^9.0.2",` <br> `"@angular/core": "^9.0.2",` <br> `"@angular/forms": "^9.0.2",` <br> `"@angular/platform-browser": "^9.0.2",` <br> `"@angular/platform-browser-dynamic": "^9.0.2",` <br> `"@angular/router": "^9.0.2",` <br> `"core-js": "^2.5.4",` <br> `"rxjs": "~6.5.4",` <br> `"zone.js": "^0.10.2",` |
> | Antes                                                                                                                                                                                                                                                                                                                                                                                                                                        |     | Depois                                                                                                                                                                                                                                                                                                                                                                                                                                       |

Também pode ser feito com

```bash
# Caso você tenha instalado global
nx --version

# No seu projeto
npx nx --version
# Ou ainda, direto no bin
./node_modules/.bin/nx --version
```

## Agora sim, foco no objetivo do post.

### O Angular 9 chegou de fato cheio de melhorias! Como o _Ivy_, novo `compiler` do Angular, _SSR_ (Server side Rendering) muito mais fácil, pois agora ao adicionar o `universal` ao projeto, o `prerender` já vem funcionando e configurável pelo `angular.json`, entre outros.

Quem quiser verificar, pode dar uma olhada nestes links:

- [Angular versioning and releases](https://angular.io/guide/releases)
- [Updating to Angular version 9](https://angular.io/guide/updating-to-version-9)
- [Angular Update Guide 8:9](https://update.angular.io/#8.0:9.0)
- [Ivy](https://angular.io/guide/ivy)

---

### `nx migrate` vs. `ng update`

O comando `nx` usa as mesmas migrações que o `ng`, fica a critério do dev ou da equipe tomar esta decisão para atualizar um projeto ou workspace.
A diferença é que com o `nx update` oferece um pouco mais de controle do que é executado.

Para grandes projetos isso é um diferencial.

- Você pode ter que pular uma migração.
- Você pode querer executar uma migração de cada vez para solucionar pequenos problemas.
- Você pode reordenar as migrações.
- Você pode querer executar a mesma migração várias vezes, se o processo demorar muito e você precisar refazer a recuperação.

## IMPORTANTE

É altamente recomendável iniciar uma migração com o status do `git` limpo, para que as alterações possam ser revertidas.

> Tentamos o nosso melhor para garantir que as migrações não falhem, mas, se houver, informe no [Github].
>
> -- Equipe [NX]

[github]: https://www.github.com/nrwl/nx/issues/new/
[nx]: https://nx.dev/angular/guides/update#reverting-a-failed-update

Nós usaremos o `nx migrate`, que já fará o update pra nós. Então vamos lá!

```bash
npx nx migrate @nrwl/workspace
```

Iniciando o processo da migração, começa com algo assim

```bash
Fetching meta data about packages.
It may take a few minutes.
Fetching @nrwl/workspace@latest
Fetching @angular-devkit/architect@~0.900.1
Fetching @angular-devkit/build-angular@~0.900.1
Fetching @angular-devkit/build-webpack@~0.900.1
Fetching @angular-devkit/build-optimizer@~0.900.1
Fetching @angular-devkit/schematics@~9.0.1
Fetching @angular/cli@~9.0.1

# ...

The migrate command has run successfully.
- package.json has been updated
- migrations.json has been generated
Next steps:
- Make sure package.json changes make sense and then run 'npm install' or 'yarn'
- Run 'nx migrate --run-migrations=migrations.json'
```

Ele analisou e atualizou as versões nos pacotes presentes em nosso `package.json`, pede para conferirmos se faz sentido o resultado e também criou um arquivo `migrations.json` na raíz do projeto, com instruções que o schematics executará.

E aí sim nós vamos instalar as os pacotes com as versão alteradas. Mas ainda não todos, somente os principais. Depois a migração dos secundários.

### Então seguindo os passos

```bash
yarn

# ...

success Saved lockfile.
✨  Done in 58.63s.
```

Quando concluído

```bash
npx nx migrate --run-migrations=migrations.json

# ...

Running migration @nrwl/workspace:add-implicit-e2e-deps
Nx no longer infers implicit dependencies between e2e projects and their source projects based on name.

These dependencies have been added to nx.json.
Successfully finished @nrwl/workspace:add-implicit-e2e-deps
---------------------------------------------------------

# ...

Running migration @nrwl/angular:update-9-0-0
A "postinstall" script has been added to package.json to run ngcc.
Updating @angular/cli to 9.0.1

# ...

Using package manager: 'yarn'
Collecting installed dependencies...
Found 40 dependencies.
Fetching dependency metadata from registry...

# ...

Updating package.json with dependency @angular/compiler-cli @ "9.0.2" (was "8.2.14")...
Updating package.json with dependency @angular/language-service @ "9.0.2" (was "8.2.14")...
Updating package.json with dependency @angular/common @ "9.0.2" (was "8.2.14")...
Updating package.json with dependency @angular/core @ "9.0.2" (was "8.2.14")...
Updating package.json with dependency @angular/forms @ "9.0.2" (was "8.2.14")...
Updating package.json with dependency @angular/platform-browser @ "9.0.2" (was "8.2.14")...
Updating package.json with dependency @angular/platform-browser-dynamic @ "9.0.2" (was "8.2.14")...
Updating package.json with dependency rxjs @ "6.5.4" (was "6.4.0")...
Updating package.json with dependency zone.js @ "0.10.2" (was "0.9.1")...
Updating package.json with dependency @angular/animations @ "9.0.2" (was "8.2.14")...
Updating package.json with dependency @angular/router @ "9.0.2" (was "8.2.14")...
Updating package.json with dependency @angular/compiler @ "9.0.2" (was "8.2.14")...

UPDATE package.json (2302 bytes)
✔ Packages installed successfully.
** Executing migrations of package '@angular/core' **

❯ Static flag migration.
  Removes the static flag from dynamic queries.
  As of Angular 9, the "static" flag defaults to false and is no longer required for your view and content queries.
  Read more about this here: https://v9.angular.io/guide/migration-dynamic-flag
  Migration completed.

❯ Missing @Injectable and incomplete provider definition migration.
  In Angular 9, enforcement of @Injectable decorators for DI is a bit stricter and incomplete provider definitions behave differently.
  Read more about this here: https://v9.angular.io/guide/migration-injectable
  Migration completed.

❯ ModuleWithProviders migration.
  In Angular 9, the ModuleWithProviders type without a generic has been deprecated.
  This migration adds the generic where it is missing.
  Read more about this here: https://v9.angular.io/guide/migration-module-with-providers
  Migration completed.

❯ Renderer to Renderer2 migration.
  As of Angular 9, the Renderer class is no longer available.
  Renderer2 should be used instead.
  Read more about this here: https://v9.angular.io/guide/migration-renderer
  Migration completed.

❯ Undecorated classes with decorated fields migration.
  As of Angular 9, it is no longer supported to have Angular field decorators on a class that does not have an Angular decorator.
  Read more about this here: https://v9.angular.io/guide/migration-undecorated-classes
  Migration completed.

❯ Undecorated classes with DI migration.
  As of Angular 9, it is no longer supported to use Angular DI on a class that does not have an Angular decorator.
  Read more about this here: https://v9.angular.io/guide/migration-undecorated-classes
  Migration completed.


Your project has been updated to Angular version 9!
For more info, please see: https://v9.angular.io/guide/updating-to-version-9
    Updating @angular/core to 9.0.0

Collecting installed dependencies...
Found 40 dependencies.
Fetching dependency metadata from registry...
Successfully finished @nrwl/angular:update-9-0-0
---------------------------------------------------------
Running migration @nrwl/cypress:update-8.12.0
Successfully finished @nrwl/cypress:update-8.12.0
---------------------------------------------------------
Running migration @nrwl/jest:update-9.0.0
    jest-preset-angular 8.0.0 has restructured folders, introducing breaking changes to
    jest.config.js files.

    We are updating snapshotSerializers in each Angular project to include appropriate paths.

    See: https://github.com/thymikee/jest-preset-angular/releases/tag/v8.0.0
Successfully finished @nrwl/jest:update-9.0.0
---------------------------------------------------------
Running migration @nrwl/jest:update-9.0.1
Successfully finished @nrwl/jest:update-9.0.1
---------------------------------------------------------
```

## Sensacional! não?!

Como nosso projeto estava limpo, funcionou sem nenhum problema, mas em projetos já em produção com bibliotecas externas e etc, pode ser necessário reverter o processo.

Isso pode ser feito desta forma:

```bash
git reset --hard # Reset any changes
git clean -fd # Delete newly added files and directories
```


**_c-ya_**

`[]s`

----------


### Quer saber como começar um projeto monorepo usando `NX`?
Vá para este post: [Criando um workspace monorepo desde o inicio](/posts/mono-repositorio-full-stack-com-angular-e-nest-js)
