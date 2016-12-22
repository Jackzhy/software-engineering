const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://localhost:27017/repo', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))


function filter(data){
  var dayindex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var day = dayindex[new Date().getDay() - 1 ];
  var hour = new Date().getHours();
  var time = "Breakfast";
  if(hour >= 10 ){
    time = "Lunch";
    if(hour >= 15){
      time = "Dinner";
    }
  }
  var r = [];
  for (i = 0; i < data.length; i++) {
    if(data[i].day == day && data[i].time == time){
      r.push(data[i]);
    }
  }
  return r;
}

app.get('/', (req, res) => {
//  res.sendFile('/Users/hongyuzhou/Desktop/411/project' + '/goog.html')
  db.collection("411.foodTruckSchedual").find().toArray((err, result) => {
    if (err) return console.log(err)

    result = filter(result);
//    result.push()
//    console.log(filter(result))
    res.render('index.ejs', {tdata: result})
  })
})

app.post('/tdata', (req, res) => {

  db.collection("411.foodTruckSchedual").find(req.body).toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {tdata: result})
  })
})
// Note: request and response are usually written as req and res respectively.
