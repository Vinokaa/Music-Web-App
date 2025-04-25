# Como rodar

Para rodar o projeto, primeiro importe os dados do arquivo SQL.sql para o MySQL Workbench através da opção `Server > Data Import`, selecionando o arquivo SQL.sql e definindo o banco de dados que receberá os dados presentes no arquivo.

Após isso, instale os módulos necessários via `npm i`, tanto na pasta BackEnd quanto na pasta FrontEnd.

Altere os dados da conexão SQL presente na pasta `BackEnd/db.js` para seus dados de conexão ao SQL Server, incluindo o nome do banco de dados que foi importado.

Depois, apenas execute o comando `npm start` também no FrontEnd e no BackEnd.

Abra seu browser no endereço `localhost:3000` e a aplicação estará em funcionamento.
