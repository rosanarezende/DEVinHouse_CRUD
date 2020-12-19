# DEVinHouse_CRUD

CRUD desenvolvido pelos alunos do curso DEVinHouse para revisão dos assuntos das 5 primeiras semanas.

<br>

## PASSO A PASSO

<br>

### Instalar Nodejs

<br>

- Verificar se tem node instalado

    ```bash
    node -v
    ```

<br>

- Instalar node na versão mais atual LTS (*em 18 de dezembro de 2020 seria a 14*)
    - [Node.js](https://nodejs.org/en/download/package-manager/#windows)

<br>

### Criar projeto React

<br>

- Na pasta que desejamos, criar o projeto:

    ```bash
    npx create-react-app crud
    ```

<br>

- Abrir o projeto no seu editor preferido (indico o *Visual Studio Code*):

    ```bash
    code crud
    ```

<br>

- Abrir um terminal e rodar a aplicação:

    ```bash
    npm start
    ```

    *OBS: Em geral ele irá renderizar a aplicação na porta 3000 (http://localhost:3000)*

<br>


### Instalar Material-UI

<br>

Para agilizar o desenvolvimento e garantir a consistência do design, indico o uso de uma biblioteca de componentes desenvolvida para o React com base no **Material Design** (do Google :wink:)

Visite o site do Material-UI para seguir as instruções de instalação e conhecer os componentes... esse site deve permanecer aberto durante todo o desenvolvimento do projeto para consultas: (https://material-ui.com/pt/)

- Instale as bibliotecas de **componentes** e **ícones**:

    ```bash
    npm install @material-ui/core @material-ui/icons
    ```

<br>

- No projeto, entre na pasta `public`, e dentro do arquivo arquivo `index.html`, dentro do _head_ carregue a **fonte** necessária para o Material, a *Roboto*:

    ```
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    ```

<br>

### Agora sim, #partiu DESENVOLVIMENTO

<br>

Antes de criarmos nossos códigos, vamos "limpar" a aplicação, removendo conteúdos desnecessários:

- em `App.js`, apague as importações da logo e do App.css e todo o conteúdo dentro do return, substituindo-o por uma *div vazia*.
- apague os arquivos `logo.svg` e `App.css`.

<br>

Em `src` vamos criar uma pasta `pages`, onde incluiremos as páginas da nossa aplicação. 
- Nesse projeto, em especial, haverá apenas uma página, a **Home**

<br>

Em `pages` criaremos a pasta `Home`:


```
import { Box, Grid, Typography } from "@material-ui/core";

function Home() {
  return (
    <Box m={4}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        CRUD dos DEVinHouse
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} spacing={2}>
          {/* Aqui vai nosso cadastro */}
        </Grid>

        <Grid item xs={12} sm={8} spacing={2}>
          {/* Aqui vai nossa listagem */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
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
