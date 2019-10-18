const express = require("express");

//------usar express----//
let app = express();

//---requerir rutas ------------///
app.use(require("./routes/index.js"));

//-----------iniciar el servidor ------//
app.listen(3000, () => {
  console.log("online");
});

module.exports = app;
