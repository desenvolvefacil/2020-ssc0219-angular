//https://bezkoder.com/node-express-mongodb-crud-rest-api/
//https://bezkoder.com/angular-10-mongodb-node-express/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Olá Mundo!" });
});

//carrega as rotas
require("./app/routes/categoria.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Servidor rodando na porta '+PORT);
});


const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado ao Banco de Dados!");
  })
  .catch(err => {
    console.log("Erro ao Conectar no Banco de dados!", err);
    process.exit();
  });