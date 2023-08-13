const Joi = require('joi');
const Boom = require('boom');

const mensajesError = require('./spanish-joi-messages.json');

const subjet_id = Joi.number().integer().min(1).required().label('subjet_id');
const name_subjet = Joi.string().label('name_subjet');
const period_id = Joi.number().integer().min(1).label('period_id');
const career_id = Joi.number().integer().min(1).label('career_id');
const nivel_id = Joi.number().integer().min(1).label('nivel_id');

const idSchema = Joi.object({
    id: subjet_id,
}).messages(mensajesError);

const createSubjetSchema = Joi.object({
    name_subjet: name_subjet.required(),
    period_id: period_id.required(),
    career_id: career_id.required(),
    nivel_id: nivel_id.required(),
}).messages(mensajesError);

const updateSubjetSchema = Joi.object({
    name_subjet: name_subjet.required(),
    period_id: period_id,
    career_id: career_id,
    nivel_id: nivel_id,
}).messages(mensajesError);

const validarID = (req, res, next) => {
     const { error } = idSchema.validate({ id: req.params.id });
  
    if (error){
        const { message } = error.details[0];
        console.log('error al validar el id')
        return next(Boom.badRequest(message));
    }  
    // Si el ID es válido, pasamos al siguiente middleware o ruta
    next();
};

const createNewSubjet = (req, res, next) => {
    const { error } = createSubjetSchema.validate({
        name_subjet: req.body.name_subjet, 
        period_id: req.body.period_id,
        career_id: req.body.career_id,
        nivel_id: req.body.nivel_id        
    },
    {
        abortEarly : false,
    });
    
    if (error){
        const messages = error.details.map((detail) => detail.message);
        console.log('error al crear el nuevo subjet');
        const errorMessage = messages.join('\n');
        return next(Boom.badRequest(errorMessage));
        //return next(Boom.badRequest(`"${errorMessage}"`));
        //return next(Boom.badRequest(`<pre>${errorMessage}</pre>`));
    }
    next();
}

const updateSubjet = (req, res, next) => {
    const { error } = updateSubjetSchema.validate({
        name_subjet: req.body.name_subjet,
        period_id: req.body.period_id,
        career_id: req.body.career_id,
        nivel_id: req.body.nivel_id
    },
    {
        abortEarly : false,
    });

    if (error){
        const messages = error.details.map((detail) => detail.message);
        console.log("Error en la actualización del Subjet");
        const errorMessage = messages.join('\n');
        return next(Boom.badRequest(errorMessage));
    }
    next();
}

module.exports = { validarID, createNewSubjet, updateSubjet }