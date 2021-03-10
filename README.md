# Angular Marvel Comics

## Descrição

Projeto criado utilizando:

- Angular 11;
- SCSS;
- Testes com Jasmine e Karma;
- Docker.

## Instruções

Clone o projeto:
```
git clone git@github.com:andersonmalheiro/angular-marvel-comics.git
```

Entre na pasta:
```
cd angular-marvel-comics
```

Antes de executar o projeto, será necessário criar uma conta no site da [API da Marvel](https://developer.marvel.com/) e obter as chaves de acesso. Depois disso atualize os arquivos `environment.ts` e `environment.prod.ts` com as chaves nos suas respectivas variaveis.

```
# environment.ts

export const environment = {
  ...
  publicKey: '<sua chave pública>',
  secretKey: '<sua chave privada>',
};

```

Para executar o projeto em modo de desenvolvimento, execute o seguinte comando:

```bash
npm start
# ou
yarn start
```

O projeto será ficará disponível no endereço [http://localhost:4200](http://localhost:4200).

Para executar uma build de produção, utilize os seguintes comandos:

```bash
npm run build --prod
# ou
yarn build --prod
```

## Testes

Para executar os testes unitários, utilize os seguintes comandos:

```bash
npm run test
# ou
yarn test
```

## Docker

Para executar o projeto utilizando o Docker, execute o seguinte comando:

```bash
docker-compose up
```

O projeto ficará disponível também no endereço [http://localhost:4200](http://localhost:4200).
