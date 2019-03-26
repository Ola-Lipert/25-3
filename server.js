var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
        console.log('Read file!');
    });
    
});

app.post('/updateNote/:note', function (req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
        stringifyFile = data + req.params.note;
        fs.writeFile('./test.json', stringifyFile, function(err) {
            if (err) throw err;
            res.send(stringifyFile + req.params.note);
            console.log('File updated');
        });
    });
    
});

app.listen(3000);

