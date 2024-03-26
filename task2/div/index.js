const express = require('express');
const app = express();
app.use(express.json());

app.post('/div', (req, res) => {
    try{
        const {X, Y} = req.body;
        const Result = X / Y;
        const response = {X: X, Y: Y, Result: Result};
        res.send(response);
    }
    catch(error) {
        res.send(error.message);
    }
    }
);

app.listen(3000, () => {
    console.log('Server is up on 3000');
    }
);