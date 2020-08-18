const express = require('express');
const app = express();

app.set('port', 4000);

app.get('/', (request,response) => {
  response.send('Hello World');
});

app.listen(app.get('port'), () => {
  console.log(`Running on port ${app.get('port')}`);
});

