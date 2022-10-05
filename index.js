'use strict';

const { start } = require('./server');
const { sequelize } = require('./models');
require('dotenv').config();




sequelize.sync()
  .then(()=>{start(process.env.PORT)})
  .catch(()=>{console.log(`cannot sync with database`)});