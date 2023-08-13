const express = require("express");
const apiRoute = require("./src/routes");
require("dotenv").config();

const {
  error,
  errorHandler,
  boomErrorHandler,
} = require("./src/middlewares/errorHandler");
const { validateSchema } = require("./src/middlewares/validatorSchemaHandler");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "sucesfull",
  });
});

// let fecha4 = new Date(2021, 66, 129);
// console.log(fecha4.ToString());

apiRoute(app);
app.use(validateSchema);
app.use(error);
app.use(errorHandler);
app.use(boomErrorHandler);

app.listen(port, () => {
  console.log(`Listening in the port ${port}`);
});
