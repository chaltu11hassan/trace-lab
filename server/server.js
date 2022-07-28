const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();


/////////////////////////////////////////////////////////////
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'f9cf2ed6135245a7b4112fac3f270bac',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('it worked!')

//////////////////////////////////////////////////////////////


app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


// try {
//     nonExistentFunction();
//   } catch (error) {
//     console.error(error);
//     // expected output: ReferenceError: nonExistentFunction is not defined
//     // Note - error messages will vary depending on browser
//   }


const port = process.env.PORT || 4005

app.listen(port, ()=> console.log(`Listening on ${port}`));