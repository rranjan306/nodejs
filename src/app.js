import routeNotFound from '../middleware/not-found';
import error from '../middleware/error';
import express from 'express';
const app = express();

app.use(express.json());

let Api = {
  moviewarehouse: require('./moviewarehouse')
};

app.use(Api.moviewarehouse);

app.use(routeNotFound);
app.use(error);

process.on('unhandledRejection', (reason) => {
  console.log(reason);
  process.exit(1);
});

process.on('uncaughtException', (reason) => {
  console.log(reason);
  process.exit(1);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server up ! at ${port}`);
});
