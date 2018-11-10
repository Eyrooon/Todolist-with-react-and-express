var express = require('express'),
    app = express(),
    bodyParser = require('body-parser')

var cors = require('cors');

var todoRoutes = require('./routes/todos');

// app.use(cors({
//     origin: 'http://127.0.0.1:3001'
// }));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static(__dirname + '/views'));


app.get('/', (req,res) => {
    res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(8000, () => {
    console.log("APP IS RUNNING"); 
})


