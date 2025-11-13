# 💼 Controle de Vendas

## 📖 Descrição
O **Controle de Vendas** é um projeto desenvolvido no curso de **Programador Web**, com o objetivo de praticar e aplicar os conhecimentos nas seguintes tecnologias:  
- **Banco de Dados MySQL**  
- **MySQL Workbench**  
- **XAMPP**  
- **Visual Studio Code (VSCode)**  
- **HTML5**  
- **CSS3**  
- **JavaScript**  
- **Node.js**

O sistema consiste em um **cadastro de pessoas físicas e jurídicas**, além de um **sistema de login** que direciona o usuário autenticado para a **página principal** do sistema.  

---

## 🗂️ Estrutura do Projeto
CONTROLEDEVENDAS/
│
├── database/
│ └── controlevendas.sql # Script de criação do banco de dados MySQL
│
├── node_modules/ # Dependências do Node.js
│
├── public/
│ ├── css/ # Arquivos de estilo (CSS)
│ ├── js/ # Scripts front-end (JavaScript)
│ ├── cadastro.html # Página de cadastro
│ ├── index.html # Página principal
│ └── login.html # Página de login
│
├── src/
│ ├── db.js # Conexão com o banco de dados
│ └── server.js # Servidor Node.js (Express)
│
├── .env # Variáveis de ambiente (configurações de conexão)
├── package.json # Configurações e dependências do projeto
├── package-lock.json # Controle de versões das dependências
└── readme.md # Documentação do projeto

---

## ⚙️ Funcionalidades
- Cadastro de **Pessoa Física** e **Pessoa Jurídica**  
- Login de usuários com redirecionamento para a **página principal**  
- Armazenamento de dados em **MySQL**  
- Backend desenvolvido com **Node.js**  
- Interface desenvolvida com **HTML, CSS e JavaScript**

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos
- **Node.js** e **npm** instalados  
- **XAMPP** (para executar o servidor MySQL)  
- **MySQL Workbench** (opcional, para gerenciamento do banco)

### 2. Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/controlevendas.git
   cd controlevendas

2. Instale as dependências:

npm install


3. Configure o arquivo .env com as credenciais do seu banco de dados.

4. Importe o arquivo database/controlevendas.sql no MySQL.

5. Inicie o servidor:

node src/server.js


6. Acesse no navegador:

http://localhost:3000

👨‍💻 Autor

Projeto desenvolvido como parte do curso de Programador Web, com foco em aprendizado prático nas tecnologias de desenvolvimento front-end e back-end.