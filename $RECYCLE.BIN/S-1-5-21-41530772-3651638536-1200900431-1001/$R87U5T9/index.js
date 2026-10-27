const http = require('http');

// Định nghĩa thông tin máy chủ
const hostname = '127.0.0.1';
const port = 3000;

// Tạo server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Xin chào! Đây là trang web đầu tiên chạy bằng Node.js của tôi.\n');
});

// Khởi động server và lắng nghe ở cổng 3000
server.listen(port, hostname, () => {
  console.log(`Server đang chạy tại http://${hostname}:${port}/`);
});