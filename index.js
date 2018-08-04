const express = require('express')
const AddressBuilder = require('./modules/AddressBuilder')

const app = express();


app.get('/', function (req, res) {
  // https://host2.rjmusicmedia.com/media/mp3/mp3-256/Sasy-Che-Pesari.mp3
  // var address = RjUtility.getAddress("https://www.radiojavan.com/videos/video/siamak-abbasi-man-divane-nistam");

  let address = new AddressBuilder.Builder("https://www.radiojavan.com/videos/video/siamak-abbasi-man-divane-nistam").detectType().crawler().getDownloadLink();


  res.send(address);
})

app.get('/domain', function (req, res) {
  res.send("domain");
})

// Set template engine
app.set('view engine', 'ejs')

// Bind the app to a specified port
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);