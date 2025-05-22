const http = require('http');
const PORT = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Jenkins CI/CD</title>
  <style>
    body {
      background: #f4f4f4;
      font-family: Arial, sans-serif;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      color: #4CAF50;
    }
    p {
      color: #555;
    }
  </style>
</head>
<body>
  <h1>Jenkins CI/CD Pipeline</h1>
  <p>Deployment Successful</p>
  <p>Welcome to the Node.js App deployed by Jenkins!</p>
</body>
</html>
`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Running on port ${PORT}`);
});
