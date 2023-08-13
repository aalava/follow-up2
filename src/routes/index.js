const express = require('express');
const subjetRouter = require('./router.subject');

const apiRoute = (app) => {
    const route = express.Router();
    // const route1 = express.Router();

    app.use('/api/v1', route);
    route.use('/subjet', subjetRouter);
    // route.use('/employes', productRouter); //Middleware
       
}

module.exports =  apiRoute;


