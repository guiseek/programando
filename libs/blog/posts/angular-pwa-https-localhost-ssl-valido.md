---
title: Angular PWA HTTPS localhost SSL válido
description: Configurando certificado SSL para desenvolvimento em ambiente local
thumbnail: assets/images/guiseek-thumbnail.jpg
cover: /assets/covers/angular-pwa-https-localhost-ssl-valido.webp
video:
canonicalUrl: 'https://programando.web.app/posts/angular-pwa-https-localhost-ssl-valido'
keywords:
  - progressive web app
  - angular
  - pwa
  - ssl
  - https
author: Guilherme Siquinelli
mail: guiseek@gmail.com
published: true
updated: 2020-02-27
publishedOn: 2020-02-27T00:00:00.000Z
---

# Angular PWA HTTPS localhost SSL valido

Com um projeto criado, seja `Vanilla`, `Angular`, `React`, `Vue`, `Svelte`, `Node`, `Express`, `NestJS`... podemos criar os certificados usando os comandos a seguir:

### Gerando um certificado

Este arquivo ainda não existe, crie no diretório do seu projeto.

```sh
$ mkdir server && touch server/localhost.conf
```

```sh
# server/localhost.conf

[ req ]

default_bits        = 2048
default_keyfile     = server/private/localhost.key.pem
distinguished_name  = subject
req_extensions      = req_ext
x509_extensions     = x509_ext
string_mask         = utf8only

[ subject ]

countryName                 = Country Name (2 letter code)
countryName_default         = BR

stateOrProvinceName         = State or Province Name (full name)
stateOrProvinceName_default = Paraná

localityName                = Locality Name (eg, city)
localityName_default        = Maringá

organizationName            = Organization Name (eg, company)
organizationName_default    = Empresa

commonName                  = Common Name (e.g. server FQDN or YOUR name)
commonName_default          = PWA Web App (localhost)

emailAddress                = Email Address
emailAddress_default        = nome@provedor.com

[ x509_ext ]

subjectKeyIdentifier   = hash
authorityKeyIdentifier = keyid,issuer

basicConstraints       = CA:FALSE
keyUsage               = digitalSignature, keyEncipherment
subjectAltName         = @alternate_names
nsComment              = "OpenSSL Generated Certificate"

[ req_ext ]

subjectKeyIdentifier = hash

basicConstraints     = CA:FALSE
keyUsage             = digitalSignature, keyEncipherment
subjectAltName       = @alternate_names
nsComment            = "OpenSSL Generated Certificate"

[ alternate_names ]

DNS.1       = localhost
DNS.2       = localhost.localdomain
DNS.3       = 127.0.0.1

# IPv4 localhost
IP.1        = 127.0.0.1

# IPv6 localhost
IP.2        = ::1
```

### NPM scripts

Adicione scripts ao `package.json`.

Eles vão gerar chaves privadas, certificados autoassinados e solicitações de assinatura de certificado. Também pra printar certificados e solicitações...

```json
{
  "name": "app",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "gen-key": "openssl genrsa -out server/private/localhost.key.pem 2048",
    "gen-cert": "openssl req -config server/localhost.conf -new -x509 -sha256 -nodes -key server/private/localhost.key.pem -days 365 -out server/private/localhost.cert.pem",
    "gen-csr": "openssl req -config server/localhost.conf -new -sha256 -nodes -key server/private/localhost.key.pem -days 365 -out server/private/localhost.req.pem",

    "print-cert": "openssl x509 -in server/private/localhost.cert.pem -text -noout",
    "print-csr": "openssl req -in server/private/localhost.req.pem -text -noout"
  }
}
```

#### Crie o diretório que irá guardar os arquivos

```sh
$ mkdir -p server/private
```

Execute os scripts criados

Gera uma nova chave privada

```sh
$ npm run gen-key
```

Gera um certificado autoassinado

```sh
$ npm run gen-cert
```

Gera uma nova solicitação de assinatura para enviar a uma autoridade de certificação

```sh
$ npm run gen-csr
```

---

Então teremos o diretório `server/private` já com os arquivos.

<div class="file-tree">
  <div class="item">server</div>
  <div class="children">
    <div class="item">private</div>
    <div class="children">
      <div class="item">localhost.cert.pem</div>
      <div class="item">localhost.key.pem</div>
      <div class="item">localhost.req.pem</div>
    </div>
  </div>
</div>

---

#### Colocando pra funcionar (macOS)

```sh
# Versões mais antigas
$ open “/Applications/Utilities/Keychain Access.app”

# Catalina
$ open “/System/Applications/Utilities/Keychain Access.app”
```

Na lateral esquerda superior selecione "Sistema", na inferior "Categoria".
Certo? Agora coloque seu `localhost.cert.pem`, pode ser arrastando.

Informe sua senha de `superuser`.

Depois abra o certificado que acabou de arrastar _clicando 2x_ e marque como a primeira sessão ali com label `Confiança` => `Ao usar este certificado` => `Confiar sempre`.

---

#### Usando

```ts
/**
 _   _           _      _ ____
| \ | | ___  ___| |_   | / ___|
|  \| |/ _ \/ __| __|  | \___ \
| |\  |  __/\__ \ || |_| |___) |
|_| \_|\___||___/\__\___/|____/

*/
```

Abra seu `main.ts` ou o arquivo _bootstrap_ da aplicação.

```ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const httpsOptions = {
    key: readFileSync('./server/private/localhost.key.pem'),
    cert: readFileSync('./server/private/localhost.cert.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions
  });

  // const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

---

#### Agora no front, seu App PWA.

```ts
/**
    _                      _
   / \   _ __   __ _ _   _| | __ _ _ __
  / _ \ | '_ \ / _` | | | | |/ _` | '__|
 / ___ \| | | | (_| | |_| | | (_| | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|
               |___/
*/
```

#### Dev

```sh
ng serve [project] --open --publicHost=localhost --ssl --sslCert=server/private/localhost.cert.pem --sslKey=server/private/localhost.key.pem
```

```sh
$ ng build [project] --configuration=production
```

Após build concluído, copie os arquivos pra dentro do diretório `dist`.

```sh
$ cp server/private/localhost.cert.pem path/to/dist/folder/cert.pem
$ cp server/private/localhost.key.pem path/to/dist/folder/key.pem
```

#### Automatizando a cópia dos arquivos

```ts
// tools/scripts/copy-cert.ts

const fs = require('fs');

fs.copyFile(
  './server/private/localhost.cert.pem',
  'dist/apps/app/cert.pem',
  err => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log('copiado');
    }
  }
);

fs.copyFile(
  './server/private/localhost.key.pem',
  'dist/apps/app/key.pem',
  err => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log('copiado');
    }
  }
);
```

#### Dependências

Caso ainda não tenha o `http-server`, pode ver instruções no [npm](https://www.npmjs.com/package/http-server), ou direto no [GitHub](https://github.com/http-party/http-server). Já adianto que se traata de um simples **web server** para uso **`local`**.

> **Warning** `http-server` is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.

#### Finalizando

E é isso, agora já podemos executar os apps, e testar `local`.

```sh
$ cd path/to/dist/folder
$ http-server -S -C cert.pem -p 80 -o
```

O `-o` serve pra abrir, Mas também pode acessar por aqui [Web App](https://localhost).

Agora adicionamos scripts que realizam todas as últimas tarefas.

> **Info** dentro do bloco `"scripts"`

```json
{
  "app:build": "ng run app:build --configuration=production",
  "app:cert": "ts-node tools/scripts/copy-cert.ts",
  "app:open": "cd path/to/dist/folder && http-server -S -C cert.pem -p 80 -o",
  "app:serve": "npm run app:build && npm run app:cert && npm run app:open"
}
```

```sh
$ ng serve api
$ npm run app:serve
```

Lembre-se que você deve acessar o aplicativo pelo mesmo domínio que configurou quando gerou o certificado. Que neste caso, usamos localhost.

A API pode ser configurada a porta em `src/main.ts`. Quando estiver rodando, abra o navegador e acesse `https://localhost:3000/`. Esperamos ver o cadeado verde na barra de URL.



**_c-ya_**

`[]s`