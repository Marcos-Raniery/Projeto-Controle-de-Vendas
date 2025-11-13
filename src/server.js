import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.send("Servidor ConectaMais rodando!");
});

// Cadastro de produto
app.post("/produtos", (req, res) => {
  const { nome, categoria, preco, descricao } = req.body;

  const sql = "INSERT INTO produtos (nome, categoria, preco, descricao) VALUES (?, ?, ?, ?)";
  connection.query(sql, [nome, categoria, preco, descricao], (err, result) => {
    if (err) {
      console.error("Erro ao inserir produto:", err);
      res.status(500).json({ message: "Erro ao cadastrar produto" });
    } else {
      res.status(201).json({ message: "Produto cadastrado com sucesso!" });
    }
  });
});

// Listar produtos
app.get("/produtos", (req, res) => {
  connection.query("SELECT * FROM produtos", (err, rows) => {
    if (err) {
      res.status(500).json({ message: "Erro ao buscar produtos" });
    } else {
      res.json(rows);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
