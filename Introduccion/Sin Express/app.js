const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Hola mundo!");
        return res.end();
    }
})
const port = 3000
server.listen(port, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${port}`)
})