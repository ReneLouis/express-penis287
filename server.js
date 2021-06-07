const express = require("express");

// Module path require for server to serve static page:
const path = require("path");

const app = express();
const port = 3000;

/* STATIC FILES MIDDLEWARE: allows server to see statics files such as imaes for sites.
    BELOW MIDDLEWARE FEED ALL IN ROOT FOLDER "./" TO THE SERVER: */
app.use(express.static(path.join(__dirname, "./")));

/* ROUTE TO index.html PAGE, SENDS STATIC PAGE index.html TO SERVER AND ALLOW TO OPEN IN BROWSER */
app.get("/", (req, res) => {
  //Use sendFile to send html page to server:
  res.sendFile(path.join(__dirname, "./index.html"));
});

/* the above only server the index.html page to server, all other static files (images...) are not served to server
    Need to use a midleware to server static file, see above "static files middleware"
    */

app.listen(process.env.PORT || port, () => {
  console.log(`Express server is now listening.`);
});
