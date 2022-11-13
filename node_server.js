var express = require('express');
const app = express();
app.use(express.json());
var bodyParser = require('body-parser') 
// Help from https://expressjs.com/en/starter/hello-world.html 
var jsonParser = bodyParser.json()
app.listen(3000, () => {
  })

app.get('/hello', (req, res) => {
    res.send({
        msg: "Hello world"
    })
  })
  //Help from: https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs
  app.get('/echo/:id', (req, res) => {
    res.send({
         id: req.params.id
    })
  })
  app.post('/sum',jsonParser, (req, res) => {
    let count = 0
    for ( const number of req.body.numbers){

            count = count + Number(number)
           
        
        }
        res.send({
            sum: count
       })
         
app.use(express.static('assets'))
        
    
    
 

  })
