const Joi = require("joi");

const createStudentSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
});

const updateStudentSchema = Joi.object({
  firstname: Joi.string(),
  lastname: Joi.string(),
  email: Joi.string().email(),
});

const getStudentSchema = Joi.object({
  id: Joi.number().integer().positive().min(1).required(),
});

const deleteStudentSchema = Joi.object({
  id: Joi.number().integer().positive().min(1).required(),
});

module.exports = {
  createStudentSchema,
  updateStudentSchema,
  getStudentSchema,
  deleteStudentSchema,
};
