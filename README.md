## Teste Desenvolvedor NodeJS

### Requisitos

Desenvolvimento de uma API REST com os métodos HTTP padrões.

A API deverá executar os verbos HTTP em uma collection 'user' com os campos 'nome', 'email', 'login' e 'senha'.

Para desenvolvimento da API deverá ser utilizado as seguintes ferramentas:

ExpressJS

Mongoose


## Instruções

Faça o fork do projeto, cria um branch com seu nome. Quando finalizar nos envie um pull request.

## Importante

Não poderá ser usado a estrutura gerada através do 'express genetator'.


## Executar Localmente

 1. instalar as dependências.
```
npm install
```
2. iniciar o server  localmente.
```
node server.js
```
3. Para testar a API baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).  ,depois do download insira as rotas abaixo no Postman

  Route                    |     HTTP  |    
------------------------- | ----------------- | 
/api/User           |       GET         | 
/api/CreateUsers             |       POST        | 
/api/User/:user_id|       GET         | 
/api/User/:user_id |       PUT         |   
/api/User/:user_id |       DELETE      | 


 ## Preview:
![api1](https://github.com/henriquemsouza/images/blob/master/api1.JPG?raw=true)
![api2](https://github.com/henriquemsouza/images/blob/master/api2.JPG?raw=true)
![api3](https://github.com/henriquemsouza/images/blob/master/api3.JPG?raw=true)




