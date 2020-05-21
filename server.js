const express = require('express');
const app = express();
app.use(express.static('./dist/porfolio'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/porfolio/' }),
);

app.listen(process.env.PORT || 8080);