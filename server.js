
const http = require('http');
const server = http.createServer();
// server.maxConnections=100;
server.keepAliveTimeout = 30 * 1000;

server.on('request',async function(req, res) {
    res.writeHead(200, 'success', {
        "content-type": "text/plain;charset=utf8"
    });
    res.write("OK");
    res.end();
});
const port = Number(process.env.PORT || 3000);
server.listen(port,'0.0.0.0');

function log(text) {
    console.log(text);
}

server.on('error', console.error);
server.on('listening',r=>log(JSON.stringify(server.address())));
server.on('close',()=>{
    log('server closed');
});

log(`pid: ${process.pid} started `);

process.on('SIGINT',()=>{
    server.keepAliveTimeout = 1;
    log(new Date().toLocaleString()+' SIGINT');
    server.close(()=>{
        process.exit(1);
    })
});
