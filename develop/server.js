// dependencies //
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// sets up the express app to handle data parsing //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listener //
app.listen(PORT, () =>
    console.log('App listening on PORT ${PORT}')
)