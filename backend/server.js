require('dotenv').config()

const express = require("express");
const cors = require('cors')
const app = express();
const axios = require("axios");



app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())



const PORT = 5000;

const fs = require("fs");

app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', function(req, res){
    res.send('Hello from backend')    
})


// API
// TODO: Move to api folder

// get Users List
app.get('/api/users', function(req, res){
  fs.readFile("./data/data.json", "utf-8", (error, data)=>{
    if(error){
      console.log(error);
      return;
    } 
    const usersData = JSON.parse(data)
    res.send(usersData)
  })
  
  
})

// create User
app.post('/api/users', async function(req,res){
  // TODO: Usar UUID o NanoID para generar ID unicos
  let newId = Math.floor(Math.random() * 1000)

  const getResponse = await axios.get('https://randommer.io/api/Card',{
    headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY
    }
  }); 
  const cardData = getResponse.data;
  const userData = {
    ...req.body,
    id: newId,
    cardInfo: {
        number: cardData.cardNumber,
        type: cardData.type,
        cvv: cardData.cvv,
        pin: cardData.pin,
        expiration: cardData.date
    }
  }
  // console.log(cardData)

  fs.readFile("./data/data.json", 'utf-8', function (err, data) {
    var json = JSON.parse(data)
    json.push(userData)

    fs.writeFile("./data/data.json", JSON.stringify(json), function(err){
      if (err) throw err
      console.log("Data Appended")
    })
})

  res.send(userData)
})
// process.env.REACT_APP_API_KEY

// Get User By ID
app.get('/api/users/:id', function(req,res){
  const userId = req.params.id;
  
  fs.readFile("./data/data.json", "utf-8", (error, data)=>{
    if(error){
      console.log(error);
      return;
    } 
    const usersData = JSON.parse(data)
    const key = Object.keys(usersData).find(user => usersData[user].id === Number(userId))
    res.send(usersData[key])
  })
})


app.put('/api/users/:id')

app.delete('/api/users/:id')

async function getCardInfo(){
  const res = await axios.post
}