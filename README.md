# Binzingo Game

Jogo feito em React JS e gRPC para a cadeira de Programção Paralela distribuída.

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install the project in two folder, FrontEnd, Client e Server.

```bash
yarn
```

# Executando

Entrar na pasta <b> FrontEnd </b> e executar o comando:

```JavaScript
yarn start
```

Entrar na pasta <b> Server </b> e executar o comando:

```JavaScript
yarn server
```

Entrar na pasta <b> Client </b> e executar o comando:

```JavaScript
yarn client
```

# Observações

Caso deseje mudar a porta do server, basta entrar no index.js que está em Server/src e alterar o link do serverbind.

Existem uma api gateway que serve para ligar a interface ao client que conecta ao servidor com grpc.
