import * as express from "express";
import * as bodyParser from "body-parser";
import {appRouter} from "./server/config/routes";
//mongoose connection created on import

const app: express.Application = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.get("/test", (req, res) => {
  res.json({
    message: "Hello yuiohkh!"
  });
});
app.use(appRouter);
export {app}