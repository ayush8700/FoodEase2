const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html', 'css');

    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.end(data);
        }
        fs.readFile('./css/style.css', (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            }
            else {
                res.end(data);
            }
        })
    })
});


server.listen(3000, 'localhost', () => {

    console.log('listening for the request in port 3000');

});