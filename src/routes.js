const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  // console.log(req)

  res.status(200).send('Welcome to Root. Are you OK?');
});

router.use('/v1/weather', weatherRoutes);

module.exports = router;
