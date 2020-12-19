# DEVinHouse_CRUD

CRUD desenvolvido pelos alunos do curso DEVinHouse para revisão dos assuntos das 5 primeiras semanas.

<br>

## PASSO A PASSO

<br>

### Instalar Nodejs

<br>

- Verificar se tem node instalado

    ```
    node -v
    ```

<br>

- Instalar node na versão mais atual LTS (*em 18 de dezembro de 2020 seria a 14*)
    - [Node.js](https://nodejs.org/en/download/package-manager/#windows)

<br>

### Criar projeto React

<br>

- Na pasta que desejamos, criar o projeto:

    ```
    npx create-react-app crud
    ```

<br>

- Entrar na pasta do projeto e rodar a aplicação:

    ```
    npm start
    ```

<br>

















### Expor seu projeto na web (deploy com SURGE)

<br>

- Buildar o projeto

    ```
    npm run build
    ```

<br>

- Criar um arquivo 202.html para poder usar subrotas

    ```
    cp build/index.html build/200.html
    ```

<br>

Usaremos o [Surge.sh](https://surge.sh/)

- Instalar o surge globalmente:

    ```
    npm install -g surge
    ```

<br>

- Rodar o surge e seguir os passos solicitados no terminal:

    ```
    surge ./build
    ```

<br>

### Comemorar!!!

<br>

<div align="center">
  <img  src='https://sorridents.com.br/wp-content/uploads/2016/01/12.gif' alt="comemorar">
</div><br>
