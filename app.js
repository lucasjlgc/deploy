const express = require('express');
const app = express();

port = 3000;

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('./index');
})

app.get('/contato', (req, res) => {
    res.render('./contato');
})


app.listen(port, () => {
    console.log('listening on port', port);
});





