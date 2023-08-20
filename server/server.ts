import { app } from './app';

const _PORT: number = 8080;

app.listen(_PORT, () => console.log('listening on port ' + _PORT));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'listening on port ' + _PORT });
})