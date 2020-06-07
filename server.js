const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.static('./public'));

const PORT = process.env.PORT;

// app.get('/', function (request, response) {
//   response.send('Hello out there! Is this nodemon thing working?')
// })

// app.get ('/hammertime', function (request, response) {
//   response.send('Don\'t touch this!');
// })
 
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});