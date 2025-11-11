const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT || process.argv[2] || 5174);
const root = process.cwd();

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
};

function send(res, code, data, type) {
  res.writeHead(code, { 'Content-Type': type || 'text/plain' });
  res.end(data);
}

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(root, reqPath);
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      return send(res, 404, 'Not Found');
    }
    const ext = path.extname(filePath);
    const type = types[ext] || 'application/octet-stream';
    fs.createReadStream(filePath).pipe(res);
    res.setHeader('Content-Type', type);
  });
});

server.listen(port, () => {
  console.log(`غرسة: الخادم يعمل على http://localhost:${port}/`);
});