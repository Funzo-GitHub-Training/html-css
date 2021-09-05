const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;


app.use(cors());

app.get('/', (req, res) => {
    // res.set('Content-Type', 'text/html');
    res.json([{
        "name": "rovil",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }]);
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});