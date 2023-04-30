const express = require('express');
const Sensor = require('./parseData.js');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
   console.log("The server is running.")
})

app.get('/sensor/:data', function (req, res) {
      const {data} = req.params;
      responseMessage(data,res);
})
app.post('/sensor',function(req,res){
   const data = req.body.data;
   responseMessage(data,res);
})

function responseMessage(data,res){
   if(data.length==22){
      const sensor= new Sensor(data);
      res.status(200).send(sensor.toJson());
   }
   else{
      res.status(400).json({
         message: 'Error. The length of the string must be 22 characters'
     });
   }
}