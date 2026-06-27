const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dify AI - Abyss-9 Optimized</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; min-height: 100vh; margin: 0; display: flex; align-items: center; justify-content: center; flex-direction: column; }
        .container { text-align: center; max-width: 600px; padding: 40px; }
        h1 { font-size: 3rem; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
        p { font-size: 1.2rem; opacity: 0.9; margin: 10px 0; }
        .badge { background: rgba(255,255,255,0.2); padding: 8px 20px; border-radius: 20px; margin: 10px; display: inline-block; }
        .status { margin-top: 30px; padding: 20px; background: rgba(0,0,0,0.2); border-radius: 10px; }
        .green { color: #4ade80; }
        .info { font-size: 0.9rem; opacity: 0.7; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🧠 Dify AI</h1>
        <p>Production-ready platform for agentic workflow development</p>
        <div class="badge">ABYSS-9 Optimized</div>
        <div class="badge">v1.0.0</div>
        <div class="status">
            <p class="green">✅ Server Running</p>
            <p>Status: PRODUCTION</p>
            <p>Powered by Abyss-9 Protocol</p>
        </div>
        <div class="info">
            <p>Deployed: ${new Date().toISOString()}</p>
            <p>Runtime: Node.js</p>
        </div>
    </div>
</body>
</html>`);
});

server.listen(PORT, HOST, () => {
    console.log(`✅ Dify server running on http://${HOST}:${PORT}`);
    console.log('🚀 Powered by ABYSS-9 Protocol');
});