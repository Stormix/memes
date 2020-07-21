import express from 'express';
import { promises as fsPromises } from 'fs';
import * as fs from 'fs';

const app = express();
const port = process.env.PORT || 6969;
const path = 'media';

app.set('etag', false);

app.get('/', (req, res) => {
  res.send('Haha meme go brrr.');
});

app.get('/send/memes', async (req, res) => {
  try {
    const memes = await fsPromises.readdir(path);
    if (memes.length > 0) {
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];
      res.set('Cache-Control', 'no-store');
      res.sendFile(randomMeme, {
        root: `${__dirname}/../media/`,
      });
    }
  } catch (e) {
    res.send('Oopsi');
  }
});

app.listen(port, () => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  console.log(`Server started at :${port}`);
});
