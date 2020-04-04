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
relevance: 4
published: true
updated: 2020-03-02
publishedOn: 2020-03-02T00:00:00.000Z
---

# O que e monorepo? NX: ferramentas de desenvolvimento para mono repositorios

Como você gerencia suas aplicações full-stack?

Em produtos de verdade esse é um grande desafio, em grandes projetos temos  vários frontends se comunicando com apis backend, que por sua vez, pensando em eficiência colaborativa e de código, compartilham interfaces entre os membros da equipe.

Eu uso o [NX] da __nrwl__, ela simplifica de uma forma sensacional como você organiza e compartilha código entre _apps_, usando boas práticas desenvolvidas dentro da [Google] pra dimensionar milhares de aplicações entre milhares de _devs_ em um único _repositório_.
Eu não tenho milhares de projetos, mas isso não impede de obter benefícios com o uso dessa ferramenta.

Em poucas palavras, o propósito é gerenciar a complexidade aplicando melhores práticas para todo o projeto, com isso temos consistência e previsibilidade e maximiza a capacidade de compartilhamento de código entre projetos.

Pra isso não basta apenas colocar todos os projetos juntos e esperar os mesmos benefícios e é aí que entra o NX.

> __Em desenvolvimento__
> Em alguns dias publico todo o conteúdo, aguardem...


<!-- em escala e é aí que o NX entra nos próximos 10 minutos, veremos.

como a complexidade pode crescer muito rapidamente em um projeto de pilha cheia, construiremos dois.

aplicativos front-end, um com angular e outro com reagir e, em seguida, um compartilhado.

back-end com ninho em cima disso, adicionaremos várias bibliotecas compartilhadas que podem.

ser usado por todos esses três aplicativos, vamos em frente e crie um novo espaço de trabalho do NX.

para ver como ele pode nos ajudar a gerenciar um projeto como esse na linha de comando.

execute npx create NX workspace seguido pelo nome da sua organização ou produto.

nos dará um espaço de trabalho vazio e escreveremos a maior parte do nosso código no.

diretórios de aplicativos e bibliotecas diretamente do NX vai ajudar você.

separar seu código compartilhado do código do aplicativo, por exemplo, você pode.

possui dois aplicativos de front-end, um para seus clientes e outro para seu.

funcionários esses aplicativos viveriam no diretório de aplicativos, mas eles poderiam compartilhar.

elementos comuns da interface do usuário que iriam para o diretório libs, portanto isso funciona muito bem.

quando você tem um sistema de design no qual compartilha elementos comuns da interface do usuário entre vários.

aplicativos, mas você também pode ter um aplicativo de back-end implementado em um servidor de nó.

e se você estiver usando texto datilografado, provavelmente desejará compartilhar interfaces entre.

seu código de front-end e back-end sem precisar duplicar e gerar novamente esse.

codificar essas interfaces também pode viver no diretório libs e ser usado de maneira confiável.

em um aplicativo grande, vamos em frente e imagine que estamos construindo.

um produto para uma empresa de viagens, temos uma equipe de engenheiros angulares que são.

atribuído à criação do aplicativo voltado para o cliente front-end, podemos optar por.

24 estruturas diferentes específicas, como reação angular e SAS, então vamos em frente.

e faça isso pela angular primeiro, nossa equipe de engenheiros deseja usar testes modernos.

ferramentas como Cypress ingest e X oferecem a opção de definir apenas essas coisas.

automaticamente sem nenhuma configuração de sua parte.

agora que nosso espaço de trabalho está configurado para ajuste angular e Cypress, iremos.

adiante e gere um novo aplicativo que criará um novo aplicativo angular exatamente como ele.

faria com a CLI angular, mas adaptada especificamente a este espaço de trabalho, você pode encontrar.

o aplicativo no fluxo do aplicativo junto com uma pasta para teste de ponta a ponta configurada.

com Cypress agora até este ponto, acabamos de usar o terminal para.

execute esses comandos, mas na verdade há uma maneira melhor de fazer isso se você estiver usando.

NX Eu recomendo que você instale o console angular vs o plug-in de código.

O plugin permite navegar facilmente por todos os comandos que você possui.

disposição através do NX, você não precisa memorizar nenhum comando ou pesquisar.

os documentos está tudo bem aqui no seu IDE e.

isso realmente ajuda a gerenciar a complexidade, porque você pode ter dezenas de aplicativos.

e bibliotecas em um único repositório mono, por exemplo, se queremos apenas executar o.

testes de ponta a ponta em nosso aplicativo de reservas atual, podemos fazer isso selecionando o.

opções que queremos e, em seguida, clicar em um botão e que dará um cipreste.

executando en testes para este aplicativo específico e da mesma tela também podemos.

executar nossos testes unitários de componentes que foram montados com baús e outro.

O recurso do console é que ele salva seus comandos na memória para que você possa.

execute-as novamente com as mesmas opções, basta clicar em um botão sem ter.

pensar nisso agora ter esta moeda moderna é muito legal, mas a mais.

os poderosos benefícios do NX começam a surgir à medida que seu aplicativo cresce em complexidade neste momento.

ponto, temos apenas um único cliente enfrentando aplicativo angular, mas vamos imaginar que.

ter uma equipe separada de desenvolvedores que estão trabalhando em um aplicativo de administração interno para.

gerenciar reservas de clientes, mas essa equipe de desenvolvimento prefere usar o.

Agora, como mencionei anteriormente, você pode usar o NX com qualquer projeto JavaScript, mas.

também inclui suporte de primeira classe para reagir, precisamos primeiro ativar o.

reagir ferramentas executando ng adicionar narval reagir e se voltarmos para o console.

agora terá acesso a esquemas especificamente para gerar reagir.

aplicativos e componentes, vamos em frente e geramos nosso aplicativo de reação do administrador.

apenas usando os padrões internos e agora temos um segundo aplicativo nos aplicativos. diretório, juntamente com seu próprio conjunto de testes de ponta a ponta agora, neste ponto, temos um. repositório mono com duas aplicações individuais, mas uma das. conceitos errôneos que você já deve ter ouvido falar é que colocar. todo o seu código em um único repositório mono atrasará seus testes e. pipelines de implantação em um projeto grande, você só deseja reconstruir e testar o. partes do aplicativo que foram afetadas por alterações que podem ser uma. aplicativo individual ou pode haver vários aplicativos que foram. afetado por uma alteração em uma de suas dependências compartilhadas que um ex pode detectar.

onde as alterações de código afetarão o repositório mono, permitindo que você trabalhe com eficiência.

com mudança de isolamento em qualquer escala, se olharmos para o ramo principal do git, você pode.

veja que temos um diretório de trabalho limpo, sem alterações e se formos para o diretório.

console angular no diagrama de dependência, podemos ver os nossos aplicativos aqui, que.

estão atualmente acinzentados porque não há alterações, mas se formos fazer uma.

alterar para o nosso aplicativo de reação, será destacado automaticamente em vermelho e.

porque o NX sabe quais aplicativos são afetados por alterações no ramo atual, podemos.

testar e construir aqueles em isolamento e é isso que Narwhal significa quando eles.

falar sobre o desenvolvimento como o Google, porque uma empresa como o Google pode ter.

milhares de aplicativos em um único repositório mono e a única maneira de operá-los em.

escala é entender quais aplicativos são afetados pela mudança se você olhar para o.

comandos sob o console angular, você verá um monte deles que são.

prefixados por afetados, esses comandos permitem que as equipes trabalhem simultaneamente em.

vários aplicativos ou bibliotecas e poder construí-los e testá-los isoladamente, sem.

ter que se preocupar com tudo o que está acontecendo no repositório mono isso é.

especialmente importante quando você começa a falar sobre código que pode afetar.

vários aplicativos, podemos demonstrar que, gerando uma biblioteca com o NX que.

ser usado pelos aplicativos angulares e de reação, vamos em frente e chamamos isso de nosso.

biblioteca de utilitários e porque eu usei o esquema padrão ele só vai.

gerar um projeto datilografado de baunilha, mas você pode gerar estruturas específicas.

bibliotecas também agora outro recurso que quero salientar antes de irmos a qualquer.

Além disso, você tem a opção de adicionar tags às suas bibliotecas..

tags let completamente opcionais permitem controlar quais tipos de aplicativos podem ser usados.

esta biblioteca como uma dependência, por exemplo, você pode ter um front-end compartilhado.

biblioteca que toca o Dom que você não gostaria de ser usado por um nó.

projeto, portanto, se um desenvolvedor de back-end tentar usar essa biblioteca como uma dependência,.

receberá um erro de limpeza que lhes dirá que é uma má ideia agora, se você já.

criou uma biblioteca compartilhável, você sabe que existem muitas etapas necessárias.

para configurar seu texto datilografado, configurar seus scripts de construção e todos os seus testes.

utilitários, mas como você está prestes a ver o NX torna todo esse processo completamente.

trivial, neste ponto, vamos entrar no código fonte da nossa biblioteca de utilitários.

e vou exportar uma variável chamada foguete unicórnio que pode.

alguns caracteres emoji porque nossa equipe de design disse que precisamos mostrar esses.

caracteres em cada página inicial de cada aplicativo em toda a empresa.

Agora, o mais impressionante do NX é que ele simplifica bastante o compartilhamento de código no.

No início deste vídeo, configuramos esse espaço de trabalho com um nome de organização e.

agora podemos importar todo o nosso código compartilhado desse namespace, começando com o @.

símbolo toda a configuração é feita para nós, então tudo o que precisamos fazer é importar o.

código que queremos usar, vamos começar fazendo isso em nosso aplicativo angular e depois.

vamos mudar para reagir e fazer a mesma coisa lá então agora temos dois.

aplicativos JavaScript front-end que compartilham um conjunto comum de utilitários agora realmente.

O mais surpreendente é que o NX acompanhará todos os aplicativos que dependem do.

biblioteca compartilhada, vamos imaginar que nossa equipe de design chegue até nós e diga.

que precisamos adicionar um emoji adicional a essa sequência se fizermos essa alteração em.

um ramo git limpo e, em seguida, volte ao diagrama de dependência que podemos ver.

exatamente quais aplicativos são afetados pela mudança, mesmo que não tenhamos realmente.

mudar qualquer coisa nos principais aplicativos front-end, eles ainda estarão.

destacado em vermelho porque eles dependem da biblioteca de utilitários que fez.

mudar e também vale ressaltar que há um comando adicional.

fornecido pelo NX que o ajudará a visualizar todo o gráfico de dependência.

com as bibliotecas afetadas sendo descritas em vermelho agora, neste ponto, temos.

só falamos sobre código de front-end, mas o NX também pode lidar com o nó do lado do servidor.

projetos com suporte de primeira classe para nest e Express nesta demonstração, usaremos.

aninhar e a primeira coisa que vamos fazer é optar pelos esquemas e depois vamos.

no console angular e encontre o comando para gerar um novo ninho.

O aplicativo fornecerá ao back-end um nome de API e sua responsabilidade é.

buscar itens do banco de dados relacionados a reservas de clientes, isso adiciona outro aplicativo.

para a história do aplicativo, mas desta vez sem testes de ponta a ponta, porque é uma.

projeto de back-end agora uma das coisas mais comuns para compartilhar entre seus.

código front-end e back-end são suas interfaces de texto datilografado que um ninho deseja.

para ler e gravar dados em um banco de dados de back-end e verifique se esses dados.

tem uma forma específica com uma interface de texto, mas provavelmente também desejará.

intellisense quando lemos esses dados e os usamos em nossos aplicativos front-end.

o que estou fazendo agora é criar outra biblioteca do NX e depois vou adicionar um.

interface datilografada, chamada reserva, colocando esse código em um.

biblioteca compartilhada, agora podemos usá-la em qualquer um de nossos aplicativos front-end ou back-end.

Além disso, podemos aproveitar o gráfico de dependência para descobrir exatamente.

quais aplicativos dependem desse tipo de dados; portanto, se essa interface mudar, então você.

saber exatamente quais aplicativos testar para criar e, finalmente, implantar em sua produção.

então há muitos benefícios óbvios para.

uma ferramenta como NX coisas como ferramentas de teste modernas como Cypress ingerir um.

gráfico de dependência que o ajudará a dimensionar um repo mono para um tamanho infinitamente grande.

equipe, bem como executores de tarefas e geradores de Co para manter seu projeto.

organizado e o resultado final é um conjunto de ferramentas que ajudarão você a desenvolver.

O Google oferece à sua organização uma maneira previsível de colaborar e.

automatize aplicativos Web complexos em grande escala. Confira o tutorial completo sobre o NX.

dev para aprender mais
---
title: 'O que e monorepo?'
description: 'NX: ferramentas de desenvolvimento para mono repositorios'
thumbnail: assets/images/guiseek-thumbnail.jpg
cover: null
video: mVKMse-gFBI
keywords:
  - angular
  - monorepo
  - workspace
  - nx
  - full-stack
author: Guilherme Siquinelli
mail: guiseek@gmail.com
published: true
updated: 2020-03-02
publishedOn: 2020-03-02T00:00:00.000Z
---

# O que e monorepo? NX: ferramentas de desenvolvimento para mono repositorios

Como você gerencia suas aplicações full-stack?

Em produtos de verdade esse é um grande desafio, em grandes projetos temos  vários frontends se comunicando com apis backend, que por sua vez, pensando em eficiência colaborativa e de código, compartilham interfaces entre os membros da equipe.

Eu uso o [NX] da __nrwl__, ela simplifica de uma forma sensacional como você organiza e compartilha código entre _apps_, usando boas práticas desenvolvidas dentro da [Google] pra dimensionar milhares de aplicações entre milhares de _devs_ em um único _repositório_.
Eu não tenho milhares de projetos, mas isso não impede de obter benefícios com o uso dessa ferramenta.

Em poucas palavras, o propósito é gerenciar a complexidade aplicando melhores práticas para todo o projeto, com isso temos consistência e previsibilidade e maximiza a capacidade de compartilhamento de código entre projetos.

Pra isso não basta apenas colocar todos os projetos juntos e esperar os mesmos benefícios e é aí que entra o NX.

em escala e é aí que o NX entra nos próximos 10 minutos, veremos.

como a complexidade pode crescer muito rapidamente em um projeto de pilha cheia, construiremos dois.

aplicativos front-end, um com angular e outro com reagir e, em seguida, um compartilhado.

back-end com ninho em cima disso, adicionaremos várias bibliotecas compartilhadas que podem.

ser usado por todos esses três aplicativos, vamos em frente e crie um novo espaço de trabalho do NX.

para ver como ele pode nos ajudar a gerenciar um projeto como esse na linha de comando.

execute npx create NX workspace seguido pelo nome da sua organização ou produto.

nos dará um espaço de trabalho vazio e escreveremos a maior parte do nosso código no.

diretórios de aplicativos e bibliotecas diretamente do NX vai ajudar você.

separar seu código compartilhado do código do aplicativo, por exemplo, você pode.

possui dois aplicativos de front-end, um para seus clientes e outro para seu.

funcionários esses aplicativos viveriam no diretório de aplicativos, mas eles poderiam compartilhar.

elementos comuns da interface do usuário que iriam para o diretório libs, portanto isso funciona muito bem.

quando você tem um sistema de design no qual compartilha elementos comuns da interface do usuário entre vários.

aplicativos, mas você também pode ter um aplicativo de back-end implementado em um servidor de nó.

e se você estiver usando texto datilografado, provavelmente desejará compartilhar interfaces entre.

seu código de front-end e back-end sem precisar duplicar e gerar novamente esse.

codificar essas interfaces também pode viver no diretório libs e ser usado de maneira confiável.

em um aplicativo grande, vamos em frente e imagine que estamos construindo.

um produto para uma empresa de viagens, temos uma equipe de engenheiros angulares que são.

atribuído à criação do aplicativo voltado para o cliente front-end, podemos optar por.

24 estruturas diferentes específicas, como reação angular e SAS, então vamos em frente.

e faça isso pela angular primeiro, nossa equipe de engenheiros deseja usar testes modernos.

ferramentas como Cypress ingest e X oferecem a opção de definir apenas essas coisas.

automaticamente sem nenhuma configuração de sua parte.

agora que nosso espaço de trabalho está configurado para ajuste angular e Cypress, iremos.

adiante e gere um novo aplicativo que criará um novo aplicativo angular exatamente como ele.

faria com a CLI angular, mas adaptada especificamente a este espaço de trabalho, você pode encontrar.

o aplicativo no fluxo do aplicativo junto com uma pasta para teste de ponta a ponta configurada.

com Cypress agora até este ponto, acabamos de usar o terminal para.

execute esses comandos, mas na verdade há uma maneira melhor de fazer isso se você estiver usando.

NX Eu recomendo que você instale o console angular vs o plug-in de código.

O plugin permite navegar facilmente por todos os comandos que você possui.

disposição através do NX, você não precisa memorizar nenhum comando ou pesquisar.

os documentos está tudo bem aqui no seu IDE e.

isso realmente ajuda a gerenciar a complexidade, porque você pode ter dezenas de aplicativos.

e bibliotecas em um único repositório mono, por exemplo, se queremos apenas executar o.

testes de ponta a ponta em nosso aplicativo de reservas atual, podemos fazer isso selecionando o.

opções que queremos e, em seguida, clicar em um botão e que dará um cipreste.

executando en testes para este aplicativo específico e da mesma tela também podemos.

executar nossos testes unitários de componentes que foram montados com baús e outro.

O recurso do console é que ele salva seus comandos na memória para que você possa.

execute-as novamente com as mesmas opções, basta clicar em um botão sem ter.

pensar nisso agora ter esta moeda moderna é muito legal, mas a mais.

os poderosos benefícios do NX começam a surgir à medida que seu aplicativo cresce em complexidade neste momento.

ponto, temos apenas um único cliente enfrentando aplicativo angular, mas vamos imaginar que.

ter uma equipe separada de desenvolvedores que estão trabalhando em um aplicativo de administração interno para.

gerenciar reservas de clientes, mas essa equipe de desenvolvimento prefere usar o.

Agora, como mencionei anteriormente, você pode usar o NX com qualquer projeto JavaScript, mas.

também inclui suporte de primeira classe para reagir, precisamos primeiro ativar o.

reagir ferramentas executando ng adicionar narval reagir e se voltarmos para o console.

agora terá acesso a esquemas especificamente para gerar reagir.

aplicativos e componentes, vamos em frente e geramos nosso aplicativo de reação do administrador.

apenas usando os padrões internos e agora temos um segundo aplicativo nos aplicativos. diretório, juntamente com seu próprio conjunto de testes de ponta a ponta agora, neste ponto, temos um. repositório mono com duas aplicações individuais, mas uma das. conceitos errôneos que você já deve ter ouvido falar é que colocar. todo o seu código em um único repositório mono atrasará seus testes e. pipelines de implantação em um projeto grande, você só deseja reconstruir e testar o. partes do aplicativo que foram afetadas por alterações que podem ser uma. aplicativo individual ou pode haver vários aplicativos que foram. afetado por uma alteração em uma de suas dependências compartilhadas que um ex pode detectar.

onde as alterações de código afetarão o repositório mono, permitindo que você trabalhe com eficiência.

com mudança de isolamento em qualquer escala, se olharmos para o ramo principal do git, você pode.

veja que temos um diretório de trabalho limpo, sem alterações e se formos para o diretório.

console angular no diagrama de dependência, podemos ver os nossos aplicativos aqui, que.

estão atualmente acinzentados porque não há alterações, mas se formos fazer uma.

alterar para o nosso aplicativo de reação, será destacado automaticamente em vermelho e.

porque o NX sabe quais aplicativos são afetados por alterações no ramo atual, podemos.

testar e construir aqueles em isolamento e é isso que Narwhal significa quando eles.

falar sobre o desenvolvimento como o Google, porque uma empresa como o Google pode ter.

milhares de aplicativos em um único repositório mono e a única maneira de operá-los em.

escala é entender quais aplicativos são afetados pela mudança se você olhar para o.

comandos sob o console angular, você verá um monte deles que são.

prefixados por afetados, esses comandos permitem que as equipes trabalhem simultaneamente em.

vários aplicativos ou bibliotecas e poder construí-los e testá-los isoladamente, sem.

ter que se preocupar com tudo o que está acontecendo no repositório mono isso é.

especialmente importante quando você começa a falar sobre código que pode afetar.

vários aplicativos, podemos demonstrar que, gerando uma biblioteca com o NX que.

ser usado pelos aplicativos angulares e de reação, vamos em frente e chamamos isso de nosso.

biblioteca de utilitários e porque eu usei o esquema padrão ele só vai.

gerar um projeto datilografado de baunilha, mas você pode gerar estruturas específicas.

bibliotecas também agora outro recurso que quero salientar antes de irmos a qualquer.

Além disso, você tem a opção de adicionar tags às suas bibliotecas..

tags let completamente opcionais permitem controlar quais tipos de aplicativos podem ser usados.

esta biblioteca como uma dependência, por exemplo, você pode ter um front-end compartilhado.

biblioteca que toca o Dom que você não gostaria de ser usado por um nó.

projeto, portanto, se um desenvolvedor de back-end tentar usar essa biblioteca como uma dependência,.

receberá um erro de limpeza que lhes dirá que é uma má ideia agora, se você já.

criou uma biblioteca compartilhável, você sabe que existem muitas etapas necessárias.

para configurar seu texto datilografado, configurar seus scripts de construção e todos os seus testes.

utilitários, mas como você está prestes a ver o NX torna todo esse processo completamente.

trivial, neste ponto, vamos entrar no código fonte da nossa biblioteca de utilitários.

e vou exportar uma variável chamada foguete unicórnio que pode.

alguns caracteres emoji porque nossa equipe de design disse que precisamos mostrar esses.

caracteres em cada página inicial de cada aplicativo em toda a empresa.

Agora, o mais impressionante do NX é que ele simplifica bastante o compartilhamento de código no.

No início deste vídeo, configuramos esse espaço de trabalho com um nome de organização e.

agora podemos importar todo o nosso código compartilhado desse namespace, começando com o @.

símbolo toda a configuração é feita para nós, então tudo o que precisamos fazer é importar o.

código que queremos usar, vamos começar fazendo isso em nosso aplicativo angular e depois.

vamos mudar para reagir e fazer a mesma coisa lá então agora temos dois.

aplicativos JavaScript front-end que compartilham um conjunto comum de utilitários agora realmente.

O mais surpreendente é que o NX acompanhará todos os aplicativos que dependem do.

biblioteca compartilhada, vamos imaginar que nossa equipe de design chegue até nós e diga.

que precisamos adicionar um emoji adicional a essa sequência se fizermos essa alteração em.

um ramo git limpo e, em seguida, volte ao diagrama de dependência que podemos ver.

exatamente quais aplicativos são afetados pela mudança, mesmo que não tenhamos realmente.

mudar qualquer coisa nos principais aplicativos front-end, eles ainda estarão.

destacado em vermelho porque eles dependem da biblioteca de utilitários que fez.

mudar e também vale ressaltar que há um comando adicional.

fornecido pelo NX que o ajudará a visualizar todo o gráfico de dependência.

com as bibliotecas afetadas sendo descritas em vermelho agora, neste ponto, temos.

só falamos sobre código de front-end, mas o NX também pode lidar com o nó do lado do servidor.

projetos com suporte de primeira classe para nest e Express nesta demonstração, usaremos.

aninhar e a primeira coisa que vamos fazer é optar pelos esquemas e depois vamos.

no console angular e encontre o comando para gerar um novo ninho.

O aplicativo fornecerá ao back-end um nome de API e sua responsabilidade é.

buscar itens do banco de dados relacionados a reservas de clientes, isso adiciona outro aplicativo.

para a história do aplicativo, mas desta vez sem testes de ponta a ponta, porque é uma.

projeto de back-end agora uma das coisas mais comuns para compartilhar entre seus.

código front-end e back-end são suas interfaces de texto datilografado que um ninho deseja.

para ler e gravar dados em um banco de dados de back-end e verifique se esses dados.

tem uma forma específica com uma interface de texto, mas provavelmente também desejará.

intellisense quando lemos esses dados e os usamos em nossos aplicativos front-end.

o que estou fazendo agora é criar outra biblioteca do NX e depois vou adicionar um.

interface datilografada, chamada reserva, colocando esse código em um.

biblioteca compartilhada, agora podemos usá-la em qualquer um de nossos aplicativos front-end ou back-end.

Além disso, podemos aproveitar o gráfico de dependência para descobrir exatamente.

quais aplicativos dependem desse tipo de dados; portanto, se essa interface mudar, então você.

saber exatamente quais aplicativos testar para criar e, finalmente, implantar em sua produção.

então há muitos benefícios óbvios para.

uma ferramenta como NX coisas como ferramentas de teste modernas como Cypress ingerir um.

gráfico de dependência que o ajudará a dimensionar um repo mono para um tamanho infinitamente grande.

equipe, bem como executores de tarefas e geradores de Co para manter seu projeto.

organizado e o resultado final é um conjunto de ferramentas que ajudarão você a desenvolver.

O Google oferece à sua organização uma maneira previsível de colaborar e.

automatize aplicativos Web complexos em grande escala. Confira o tutorial completo sobre o NX.

dev para aprender mais -->


[NX]: https://nx.dev
[Google]: https://google.com

