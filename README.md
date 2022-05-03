# Project Futebol Club
# Contexto
Este projeto foi desenvolvido na @Trybe(curso de programação). O projeto consiste em um site informativo sobre partidas e classificações de futebol! 
Neste projeto foi construido um back-end dockerizado utilizando modelagem de dados através do Sequelize respeitando as regras de negócio.

A aplicação foi desenvolvida com os seguintes requisitos:

* Realizar a dockerização dos apps, network, volume e compose;
* Modelar dados com MySQL através do Sequelize;
* Criar e associar tabelas usando models do sequelize;
* Construir uma API REST com endpoints para consumir os models criados;
* Fazer um CRUD utilizando ORM;

## Técnologias usadas

Back-end:
> Desenvolvido usando: Node.js, Express , Sequelize, MySQL, TypeScript!

## Instalando Dependências

Após clonar o projeto, utilize na pasta raiz o comando:

```bash
npm install
```

## Variáveis de Ambiente

Na pasta `backend` do projeto, crie um arquivo .env para configurar as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome` e senha `1234` seu arquivo ficará desta forma:

```bash
PORT=3001
DB_USER=nome
DB_PASS=1234
DB_NAME=TRYBE_FUTEBOL_CLUBE
DB_HOST=localhost
DB_PORT=3306
```

## Executando aplicação

Para rodar o projeto, utilize na pasta raiz o comando:

```bash
npm run compose:up
```

Na pasta `frontend`, utilize o comando a seguir para visualizar a página da aplicação:

```bash
npm start
```

* Os endpoints estão no padrão REST, ou seja, utilize os verbos HTTP para realizar as requisições.

## Requisições

### Realizar Login

* Para realizar o login, devemos acessar o endpoint `POST /login`
* O endpoint deve receber a estrutura com os seguintes dados:
```bash
{
  "email": "admin@admin.com",
  "password": "secret_admin"
}
```
* Este endpoint te retornará um `Token`

### Validação do Login

* Para realizar a validação do login, devemos acessar o endpoint `GET /login/validate`
* A requisição deve conter no Header o `token` gerado no login 

### Listar todos os Clubs

* Para listar todos os Clubs, devemos acessar o endpoint `GET /clubs`.
* A requisição deve conter no Header o `token` gerado no login 

### Listar um Club

* Para listar um club, devemos acessar o endpoint `GET /user/:id` passando na `URL` o `ID` do club que desejamos buscar.
* A requisição deve conter no Header o `token` gerado no login 

### Listar todas Partidas

* Para listar todas as partidas , devemos acessar o endpoint `GET /matchs`
* A requisição deve conter no Header o `token` gerado no login 

### Listar Partidas em Progresso

* Para listar as partidas em progresso, devemos acessar o endpoint `GET /matchs/?inProgress=true` passando na `URL` o parâmetro.
* A requisição deve conter no Header o `token` gerado no login 

### Listar Partidas em Finalizadas

* Para listar as partidas em progresso, devemos acessar o endpoint `GET /matchs/?inProgress=false` passando na `URL` o parâmetro.
* A requisição deve conter no Header o `token` gerado no login 

### Adicionar Partidas

* Para adicionar partidas, devemos acessar o endpoint `POST /matchs`
* O endpoint deve receber a estrutura com os seguintes dados:
```bash
{
  "homeTeam": 16, // O valor deve ser o id do time
  "awayTeam": 8, // O valor deve ser o id do time
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
  "inProgress": true // a partida deve ser criada como em progresso
}
```
* A requisição deve conter no Header o `token` gerado no login 

### Finalizar Partidas

* Para finalizar partidas, devemos acessar o endpoint `PATCH /matchs/:id/finish` passando na `URL` o `ID` da partida a ser finalizada.
* A requisição deve conter no Header o `token` gerado no login 

### Atualizar Partidas em Andamento

* Para atualizar partidas em andamento, devemos acessar o endpoint `PATCH /matchs/:id` passando na `URL` o `ID` da partida a ser atualizada.
* O endpoint deve receber a estrutura com os seguintes dados:
```bash
{
  "homeTeamGoals": 3,
  "awayTeamGoals": 1
}
```
* A requisição deve conter no Header o `token` gerado no login 


### Filtrar a Classificação dos Times da Casa

* Para filtrar a classificação, devemos acessar o endpoint `GET /leaderboard/home`.
* A requisição deve conter no Header o `token` gerado no login 

## Observações:

* O front-end deste projeto já foi provido pela @Trybe.
* Projeto em andamento para melhorias e implementações de mais funcionalidades.
