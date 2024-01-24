const express = require('express');

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.static('js'));

app.get('/questions/', (req, res)=>{
    //res.send('Welocome to the home page.');
    res.sendFile('/question_dir/questions.json', {root: __dirname});
})

app.get('/', (req, res)=>{
    //res.send('Welocome to the home page.');
    res.sendFile('public/index.html', {root: __dirname});
})

app.listen(3000, ()=>{
    console.log('Listenting at port 3000 ...');
});