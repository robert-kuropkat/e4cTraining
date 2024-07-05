/**
 * @file
 * @description Basic NodeJS server
 * @author Robert Kuropkat <robert.kuropkat@gmail.com>
 */

const http      = require('http');
const fs        = require('fs');
const HOSTNAME  = process.env.HOSTNAME || "localhost";
const PORT      = process.env.PORT     || 3000;


http
    .createServer((request,response) => {
        let path = './';
        switch (request.url)
        {
            case '/':
                path += 'index1.html';
                response.statusCode = 200;
                break;
            case '/about':
                path += 'about.html';
                response.statusCode = 200;
                break;
            default:
                path += '404.html';        
                response.statusCode = 404;
                break;
            }
        response.setHeader('Content-Type', 'text/html');
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) { console.error(err); response.end(); }
            else     { console.log(path) ; response.end(data); }
        })
    })
    .listen( PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
    });

/**
 * File manipulation functions from beginning of tutorial, pulled out
 * so I could also practtice using modules.
 */
const messWithFile = require('./functions');
messWithFile();

/**
 * End of File
 */