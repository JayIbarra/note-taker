// dependencies //
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const api = require('./routes/api/index.js')
const html = require('./routes/html/index.js')

// sets up the express app to handle data parsing //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

// listener //
app.listen(PORT, () =>
    console.log('App listening on PORT ${PORT}')
)