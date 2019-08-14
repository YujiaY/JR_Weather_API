const express = require('express');
require('dotenv').config();

const app = express();
const routes = require('./routes');
const cors = require('cors');

app.use(express.json());

const PORT = process.env.PORT || 3000;

// app.get('/v1', (req, res) => {
//   // console.log(req.body);
//   res.send('Are you OK?');
// });
app.use(cors());
app.use(routes);

// app.get('/v1/weather', (req, res) => {
//   // console.log(req);
//   const city = req.query.city;
//   res.send(`Now the city is: ${city}`);
//   // res.send('Are you OK?');
//
// });


// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fda1843372e767c6f33d35ea8eae9667




app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}.`);
})
