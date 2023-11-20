const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<body><p>Welcome to my Node JS project</p></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/home'){
        res.write('<html>');
        res.write('<body><p>Welcome Home</p></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/about'){
        res.write('<html>');
        res.write('<body><p>Welcome to About Us page</p></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/node'){
        res.write('<html>');
        res.write('<body><p>Welcome to my Node Js project</p></body>');
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000);