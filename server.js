require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 5000);

app.use(cors());

// endpoint
app.get("/api/whoami", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        ipaddress: req.headers["x-forwarded-for"],
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
});

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});