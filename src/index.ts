import app from './app';
import config from './config';

app.listen(config.port, () => {
  console.log(`RUNNING ON: http://localhost:${config.port}`);
});
