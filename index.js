const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.end('Hello from Jenkins CI/CD!');
}).listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
