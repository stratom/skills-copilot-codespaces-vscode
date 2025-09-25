// Create web server
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle different routes
    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head>
                    <title>GitHub Copilot Demo Server</title>
                </head>
                <body>
                    <h1>¡GitHub Copilot puede crear servidores web!</h1>
                    <h2>GitHub Copilot can create web servers!</h2>
                    <p>Este servidor fue generado usando comentarios y GitHub Copilot</p>
                    <p>This server was generated using comments and GitHub Copilot</p>
                    <ul>
                        <li><a href="/api/capabilities">Ver capacidades de Copilot</a></li>
                        <li><a href="/api/demo">Ver demo de funciones</a></li>
                    </ul>
                </body>
            </html>
        `);
    } else if (pathname === '/api/capabilities') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            capabilities: [
                'Sugerencias de código inteligentes',
                'Soporte multilenguaje',
                'Generación desde comentarios',
                'Múltiples opciones de sugerencias',
                'Integración con Codespaces'
            ],
            languages: ['JavaScript', 'Python', 'TypeScript', 'Ruby', 'Go', 'C#', 'C++'],
            editors: ['VS Code', 'Visual Studio', 'JetBrains IDE', 'Neovim']
        }, null, 2));
    } else if (pathname === '/api/demo') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'GitHub Copilot Demo API',
            timestamp: new Date().toISOString(),
            examples: {
                calculation: { input: [10, 5], operations: ['sum', 'difference', 'product'] },
                validation: { email: 'usuario@ejemplo.com', valid: true },
                member: { name: 'Desarrollador', skills: ['JavaScript', 'Python'], level: 'intermediate' }
            }
        }, null, 2));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada / Page not found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor web ejecutándose en http://localhost:${PORT}`);
    console.log(`Web server running at http://localhost:${PORT}`);
    console.log('GitHub Copilot generó este servidor desde comentarios!');
    console.log('GitHub Copilot generated this server from comments!');
});