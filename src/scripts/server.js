// server.js
// Backend simples que esconde a API_KEY do Gemini e faz proxy das requisições do chatbot.
const path = require('path');

// Aponta explicitamente para o .env na raiz do projeto,
// já que server.js está em src/scripts/
// iniciar servidor: node src/scripts/server.js
require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });

const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(express.json());

// Serve os arquivos html/css/js a partir da raiz do projeto,
// não da pasta onde server.js está
app.use(express.static(path.join(__dirname, '..', '..')));

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  console.error('ERRO: defina API_KEY no arquivo .env');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Campo "message" é obrigatório.' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent(message);
    const text = result.response.text();

    res.json({ reply: text });
  } catch (err) {
    console.error('Erro ao chamar a API Gemini:', err);
    res.status(500).json({ error: 'Falha ao consultar o Gemini.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});