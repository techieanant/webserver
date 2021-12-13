const express = require('express');
const path = require('path');
const app = express();

const port = 42069;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

console.log(process.env.ROOT_PATH);
console.log(process.env.RSVP_PATH);

app.get('/', express.static(path.join(__dirname, process.env.ROOT_PATH)));
app.get('/rsvp', express.static(path.join(__dirname, process.env.RSVP_PATH)));