const http = require('http');

http.createServer((req, res) => {
    if (req.url.match(/\.(html)|(css)|(png)|(js)|(jpg)/)){

    } else if (req.url === '/'){

    }else if (req.url.startsWith('/search')){

    }else {

    }

}).listen(3000, ()=>{ console.log('Сервер работоает на http://localhost:3000')});