const request = require('request');

exports.getStatus = (req, res, next) => {
  res.status(200).json({ message: 'Server is Running!' });
}

exports.getDuration = (req, res, next) => {
  console.log("Query", req.query);
  const origin = req.query.origin;
  const destination = req.query.destination;
  const query = `origins=${origin}&destinations=${destination}`;
  request(
    {
      url: `${process.env.GOOGLE_MATRIX_API}&${query}&key=${process.env.API_KEY}`
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
}
