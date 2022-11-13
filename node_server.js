var express = require('express');
const app = express();
app.use(express.json());
// Help from https://expressjs.com/en/starter/hello-world.html 
app.listen(3000, () => {
  })

app.get('/hello', (req, res) => {
    res.send({
        msg: "Hello world"
    })
  })
