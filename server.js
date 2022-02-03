//imports
const express = require('express');
const routes = require('./routes');
//connection with sequelize
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;//port#

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//Port message after node server.js
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening to localhost:${PORT}!`);
  });
});