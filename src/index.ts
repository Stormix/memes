import express from 'express';

const app = express();
const port = 6969;

app.get('/', (req, res) => {
  res.send('Haha meme go brrr.');
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
