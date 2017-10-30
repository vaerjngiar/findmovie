// const fs = require('fs');
// const path = require('path');

const omdb = require('../lib/omdb');
const url = require('url');

const render = require('../lib/render');


function search (req, res){
    const parsedUrl = url.parse(req.url, true);
    const title = parsedUrl.query.title;

    console.log(parsedUrl.query);


    omdb.get(title, (error, movie) =>{
        if(error) {
            return render('error.html', {error: error.message}, (error, html)=>{
                if (error) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    return res.end(error.message);
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(html);


            });
        }

       render('movie.html', movie, (error, html)=>{
           if (error) {
               res.writeHead(500, {'Content-Type': 'text/plain'});
               res.end(error.message);
           }

           res.statusCode = 200;
           res.setHeader('Content-Type', 'text/html');
           return res.end(html);


       });
    });

    // const stream = fs.createReadStream(path.resolve('public', 'movie.html'));
    //
    // stream.pipe(res);


}


module.exports = search;