import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('error!', err);
  }

  console.log(`server is listening on port ${port}`);
});
