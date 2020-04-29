---
title: 'O que e monorepo?'
description: 'NX: ferramentas de desenvolvimento para mono repositorios'
thumbnail: assets/images/guiseek-thumbnail.webp
cover: assets/covers/nx.webp
video: null
canonicalUrl: 'https://programando.web.app/posts/o-que-e-monorepo-nx-ferramentas-de-desenvolvimento-para-mono-repositorios'
keywords:
  - angular
  - monorepo
  - workspace
  - nx
  - full-stack
author: Guilherme Siquinelli
mail: guiseek@gmail.com
language: pt-br
relevance: 10
published: true
updated: 2020-04-29
publishedOn: 2020-04-29T00:00:00.000Z
---

# O que e monorepo? NX: ferramentas de desenvolvimento para mono repositorios

Como você gerencia suas aplicações full-stack?

Em produtos de verdade esse é um grande desafio, em grandes projetos temos  vários frontends se comunicando com apis backend, que por sua vez, pensando em eficiência colaborativa e de código, compartilham interfaces entre os membros da equipe.

Eu uso o [NX] da __nrwl__, ela simplifica de uma forma sensacional como você organiza e compartilha código entre _apps_, usando boas práticas desenvolvidas dentro da [Google] pra dimensionar milhares de aplicações entre milhares de _devs_ em um único _repositório_.
Eu não tenho milhares de projetos, mas isso não impede de obter benefícios com o uso dessa ferramenta.

Em poucas palavras, o propósito é gerenciar a complexidade aplicando melhores práticas para todo o projeto, com isso temos consistência e previsibilidade e maximiza a capacidade de compartilhamento de código entre projetos.

> **Alerta**
> Mas não adianta somente colocar vários projetos no mesmo diretório. Vai muito além disso.

## Quais os benefícios?

- **Shared Code**
  Código compartilhado === ***DRY** *(Don't repeat yourself)** Podemos reutilizar validações, componentes frontend, classes, interfaces, funções. É código reutilizado entre aplicações, bibliotecas tanto front como backend. É isso mesmo! Frontend e Backend compartilhando código.

- **Atomic changes**
  Alteramos uma feature na API que afeta os clientes que a consomem? Altere também os clientes e faça o commit com os trechos pertinentes junto! Resolvendo em uma mesma feature branch, em um mesmo commit.

- **Single set of depenndencies**
  Todos os aplicativos usando a mesma versão de dependência de terceiros. Apps usados ou alterados com menos frequência não vão ficar pra trás usando uma versão depreciada. Faça o updade em 1, faça em todos.

- **Developer mobility**
  Crie e teste suas aplicações de forma consistente. Envie e receba alterações com mais confiança entre equipes verificando se as alteração são seguras.

## Scaling
Com o NX, temos comandos para testar, servir, *"buildar"* de forma mais consistente. Executando os comandos apenas para códigos que foram afetados pelas alterações, reduzindo o tempo de execução de testes e builds.

O código compartilhado pode e deve ser controlado, definindo quais bibliotecas podem depender uma das outras, aplicando por exemplo princípios como [Clean Architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) mencionado pelo **Uncle Bob**.

Temos diagrama de arquitetura preciso e atualizado. Evitando que um diagrama feito na animação do inicio do projeto fique desatualizado conforme o código é alterado.
O diagrama diz quem depende de quem e quem foi afetado em alterações *(veremos adiante)*.

## Como funciona na prática

### Então vamos criar 3 apps.
1. Angular (PWA Mobile)
2. Angular (PWA Desktop)
2. NestJS (API)
3. Express (Cloud functions)

### E algumas bibliotecas compartilhadas
1. Custom Material
2. Kit de interface UI
3. Utilitários de formatação
4. Custom Elements com Angular Elementss



[NX]: https://nx.dev
[Google]: https://google.com

