const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/routes");
const connect = require("./database/connection");
const bodyParser = require("body-parser")

// para que funcione bien el body parsed
app.use(express.json())
app.use(express.static('build'));


// para vincular las rutas con server.js, se pone directamenten el archivo donde van a estar esas carpetas
app.use("/", router)

// para conexión heroku
// var port = process.env.PORT || 5000;
// if (process.env.NODE_ENV  === "production") {
//     app.use(express.static("client/build"));
  
//     app.get("*", (req, res) => {
//       res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//     });
//   }

const port = 5000;
app.listen(port, () => console.log(`Servidor en puerto: ${port}`))
