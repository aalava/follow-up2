const Boom = require("boom");

const validateSchema = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      next(
        Boom.badRequest(error.details[0].message),
        console.log("THE SCHEMA IS NOT VALID")
      );
    } else {
      next();
    }
  };
};

module.exports = { validateSchema };
