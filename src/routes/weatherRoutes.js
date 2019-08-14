const express = require('express');
const weather = require('../models/Weather')

const router = express.Router();
router.use(express.json());

router.get('/', (req, res, next) => {
  // console.log(req)
  const {cc, city}= req.query;
  // console.log({cc, city});
  // res.status(200).send({cc, city});
  //
    weather.getData(city, cc)
      .then(result => {
        console.log(result.data);
        res.send(result.data);
      })
      .catch(err => {
        // console.log(`This is log for Error: ${err}`);
        console.log(err)
        next(err);
      });
    // .then(response => responseFormatter(res, 200, null, response))
    // .catch(err => next(err));
  // res.status(200).send('Are you OK?' + `Country Code: ${cc} and City: ${city}`);
});

module.exports = router;
