const fs = require('fs');
const path = require('path');

const omdb = require('../lib/omdb');
const url = require('url');


function search (req, res){
    const parsedUrl = url.parse(req.url, true);
    const title = parsedUrl.query.title;

    console.log(parsedUrl.query);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    omdb.get(title, (error, movie) =>{
        if(error) throw error;

       console.log(movie);
    });

    const stream = fs.createReadStream(path.resolve('public', 'movie.html'));

    stream.pipe(res);


}


module.exports = search;