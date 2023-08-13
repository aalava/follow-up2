const express = require('express');
const { Subjet } = require('../db/models/subjet.model');

async function checkSubjetExistence(req, res, next) {
    const id = req.params.id;  
    try {
        const subjet = await Subjet.findByPk(id);  
        if (!subjet) {
            return res.status(404).json({ error: 'No se encontró ninguna asignatura con el ID proporcionado' });
        }
        req.subjet = subjet;
        next();
    } 
    catch (error) {
        console.error('Error al buscar la asignatura:', error);
        res.status(500).json({ error: 'Error al buscar la asignatura' });
    }
}

module.exports = { checkSubjetExistence }