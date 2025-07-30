# 🐾 AdoPet - Testes E2E com Cypress

Este repositório contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para a aplicação **AdoPet**, uma plataforma fictícia voltada para adoção de pets.

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem dos testes
- [Node.js](https://nodejs.org/) - Ambiente de execução

## 📌 Funcionalidades Testadas

Os testes cobrem os principais fluxos do sistema AdoPet, incluindo:

- 🔐 **Autenticação**  
  - Login de usuário  
  - Cadastro de novo usuário  

- 🐶 **Adoção de Pets**  
  - Listagem de pets disponíveis  
  - Visualização de detalhes de um pet  

- 📩 **Mensagens**  
  - Envio de mensagem para um abrigo  
  - Validação de campos obrigatórios  

- ⚙️ **Validações Gerais**  
  - Navegação entre páginas  
  - Mensagens de erro e sucesso
 
  ## 🛠️ Como Rodar o Projeto

  1. Clonar o repositório
       ```git clone https://github.com/lucaslobatob/adoPet-cypress.git  ```
      ``` cd adoPet-cypress  ```
     
  2. Instalar dependências
       ```npm install  ```
  
  3. Rodar os testes em modo interativo
       ```npx cypress open  ```

  4. Rodar os testes em modo headless
       ```npx cypress run  ```


