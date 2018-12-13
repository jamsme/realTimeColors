const express = require('express');
const app = express();
const server = app.listen(7100);
console.log("listening on 7100")
const io = require('socket.io')(server);
var bodyParser = require('body-parser');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.render('index')
})

io.on('connection', function (socket){

    socket.on("change_color", function (data){
        io.emit('update_color', {color: data.value})
    })

})