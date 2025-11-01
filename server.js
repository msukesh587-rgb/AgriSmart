const { spawn } = require('child_process');
const http = require('http');
const httpProxy = require('http-proxy');

const TARGET_PORT = 8081;
const PROXY_PORT = 5000;

const proxy = httpProxy.createProxyServer({
  target: `http://localhost:${TARGET_PORT}`,
  ws: true,
  changeOrigin: true
});

const server = http.createServer((req, res) => {
  proxy.web(req, res, {}, (err) => {
    if (err) {
      console.error('Proxy error:', err);
      res.writeHead(502);
      res.end('Bad Gateway');
    }
  });
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});

proxy.on('error', (err) => {
  console.error('Proxy error:', err.message);
});

server.listen(PROXY_PORT, '0.0.0.0', () => {
  console.log(`Proxy server running on port ${PROXY_PORT}, forwarding to port ${TARGET_PORT}`);
  
  const expo = spawn('npx', ['expo', 'start', '--web'], {
    stdio: 'inherit',
    shell: true
  });

  expo.on('error', (error) => {
    console.error(`Expo process error: ${error.message}`);
    process.exit(1);
  });

  expo.on('close', (code) => {
    console.log(`Expo process exited with code ${code}`);
    process.exit(code);
  });
});

process.on('SIGINT', () => {
  console.log('Shutting down...');
  server.close();
  process.exit(0);
});
