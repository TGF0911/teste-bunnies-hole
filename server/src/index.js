const express = require('express');
const cors = require('cors');
const db = require('mongoose');
const routes = require('./routes');

const app = express();

db.connect(`mongodb+srv://ThaisData:ThaisData@cloudcluster.fui0p.gcp.mongodb.net/bunnieshole?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);