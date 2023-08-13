const express = require('express');
const route = express.Router();
const { validarID, createNewSubjet, updateSubjet } = require('../schemas/subject.schemas');
const { checkSubjetExistence } = require('../middlewares/queryErrorHandler');
const SubjectService = require('../services/service.subject');

const mySubjectService = new SubjectService();

route.get('/', (req, res) => {
    res.json({
        message:'successfully connected to the subject API.',
    })
})

route.get('/:id', validarID, checkSubjetExistence, async (req, res) => {
    try {
        const id = req.params.id;
        const resultConnection = await mySubjectService.testDatabaseConnection();
        if (resultConnection){
            try {
                const resultQuery = await mySubjectService.getSubjetById(id);
                if (resultQuery){
                    res.json({
                        message: 'sucessfully get data with ID: '+ id +' from server.',
                        message2: resultQuery
                    });
                }
                else {
                    res.json({
                        error : "No record found for given ID: "+id
                    });
                }
            } catch (error) {
                res.json({
                    error : "No record found for given ID: "+id
                });
            }
        }        
    } catch (error) {
        throw new error;
    }
});

route.post('/create', createNewSubjet, async (req, res) => {
    try {
        const { name_subjet, period_id, career_id, nivel_id } = req.body;
        console.log("data received", JSON.stringify(req.body));
        const resultConnection = await mySubjectService.testDatabaseConnection();
        if (resultConnection){
            try {
                const resultQuery = await mySubjectService.createNewSubjet({
                    name_subjet: name_subjet,
                    period_id: period_id,
                    career_id: career_id,
                    nivel_id: nivel_id,
                });
                res.json({
                    message: 'sucessfully created data',
                    message2: resultQuery,
                });                
            } catch (error) {
                res.json({
                    error : "No updated data",
                });
            }               
        }
    } 
    catch (error) {
        throw new error;
    }
});

route.patch('/:id', validarID, updateSubjet, (req, res) => {
    const { id } = req.params;
    const body = req.body;
    console.log("data received", JSON.stringify(req.body));
    res.json({
        message: 'sucessfully updated data',
    });
});

route.delete('/:id', validarID, checkSubjetExistence, async (req, res) => {
    try {
        const id = req.params.id;
        const resultConnection = await mySubjectService.testDatabaseConnection();
        if (resultConnection){
            try {
                const resultQuery = await mySubjectService.deleteSubjet(req);
                res.json({
                    message: 'sucessfully delete data with ID '+ id +' from server.',
                });
            }
            catch (error) {
                res.json({
                    error : "No deleted data",
                });
            }
        } 
    } 
    catch (error) {
        throw new error;
    }    
});

module.exports = route;

/* Primer Deber */
/*
const express = require('express');
//const sql = require('./dbConnection.js');
const route = express.Router();

const SubjectService = require ('../services/service.subject');
const service = new SubjectService();

route.get('/allSubjects', async(req, res) => {
    const allRecords = await service.getAllRecords();
    res.json(allRecords);
})

route.get("/:id", async (req, res) => {
    const { id } = req.params;
    const mySubject = await service.findOne(id);
    res.json(mySubject);
});

route.post("/", async (req, res) => {
    const { data } = req.body;
    const newSubject = await service.create(data);
    res.json(newSubject);
});

route.patch("/:id", async (req, res) => {
    const { data } = req.body;
    const updateSubject = await service.update(data);
    res.json(updateSubject);
});

router.delete("/:id", async (req, res) => {
   const { id } = req.params;
   const deleteSubject = await service.delete(id);
   res.json(deleteSubject);
});
  
module.exports = route;
*/