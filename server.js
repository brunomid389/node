const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`Requisição: ${req.url}`);

  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  if (!path.extname(filePath)) {
    filePath += '.html';
  }

  console.log(`Tentando abrir arquivo: ${filePath}`);

  const extname = path.extname(filePath).toLowerCase();
  let contentType = 'text/html';

  switch (extname) {
    case '.js': contentType = 'text/javascript'; break;
    case '.css': contentType = 'text/css'; break;
    case '.json': contentType = 'application/json'; break;
    case '.png': contentType = 'image/png'; break;
    case '.jpg':
    case '.jpeg': contentType = 'image/jpeg'; break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.log(`Erro ao abrir arquivo: ${err.message}`);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Arquivo não encontrado');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
