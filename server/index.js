"use strict";
const app = require('./server.js');
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
