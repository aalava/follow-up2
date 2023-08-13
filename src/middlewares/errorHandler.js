/* Registrando el error */
const error = (err, req, res, next) => {
  //console.log(`Time: ${Date.now(1)}`)
  //console.log(err);
  console.log("primer handler error");
  next(err);
};

const errorHandler = (err, req, res, next) => {
  console.log("segundo handler error");
  /*res.json({
      message: err.message,
      stack: err.stack
    });*/
  next(err);
};

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    console.log("tercer handler error");
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    res.status(500).json({ error: "Hubo un error en el servidor" });
  }
};

module.exports = { error, errorHandler, boomErrorHandler };
