const express = require('express');
const path = require('path');
const app = express();

const port = 42069;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

console.log(process.env.ROOT_PATH);
console.log(process.env.RSVP_PATH);
const rootPath = process.env.ROOT_PATH || '';
const rsvpPath = process.env.RSVP_PATH || '';

app.use('/', express.static(path.join(__dirname, `${rootPath}`)));
// app.get('/', express.static(path.join(__dirname, rootPath)));

app.use('/rasveep', express.static(path.join(__dirname, rsvpPath)));