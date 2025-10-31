import dgram from "dgram";
import http from "http";

const UDP_PORT = 8081;
const HTTP_PORT = process.env.PORT || 3000;

// UDP server
const udpServer = dgram.createSocket("udp4");
udpServer.on("message", (msg, rinfo) => {
  console.log(`UDP message from ${rinfo.address}:${rinfo.port} -> ${msg}`);
});
udpServer.bind(UDP_PORT, "0.0.0.0", () => {
  console.log(`UDP server running on port ${UDP_PORT}`);
});

// HTTP server biar container tetep hidup
const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server aktif, nyantai aja bro.\n");
});

httpServer.listen(HTTP_PORT, "0.0.0.0", () => {
  console.log(`HTTP server running on port ${HTTP_PORT}`);
});
