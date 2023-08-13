/* Segunda Tarea */
const sequelize = require('../libs/sequelize');
const { Subjet } = require('../db/models/subjet.model');

class SubjectService {
    constructor (){

    }

    async testDatabaseConnection() {
        try {
            // Verifica la conexión a la base de datos
            await sequelize.authenticate();
            console.log('Conexión a la base de datos establecida correctamente.');
            return true;
        }
        catch (error) {
            console.error('Error al establecer la conexión a la base de datos:', error);
        }
    }

    async getSubjetById(id){
        try {
            const subjet = await Subjet.findByPk(id);
            if (!subjet){
                //throw new Error("No existe el registro");
                console.log("No se encontró el registro con el ID: ", id);
                return null;
            }
            console.log("Asignatura encontrada", subjet.toJSON());
            return subjet.toJSON();
        } 
        catch (error) {
            console.log("Error al obtener la asignatura por ID", error);
            throw error;
        }
    }

    async createNewSubjet(data){
        try {
            const newSubject = await Subjet.create(data);
            if (!newSubject){
                console.log("Ocurrió un problema creando una nueva asignatura.");
                return null;
            }
            console.log('Asignatura creada', newSubject.toJSON());
            return newSubject.toJSON();
        }
        catch (error){
            console.log(`Hubo un error al crear la asignatura ${JSON.stringify(data)}`, error);
            throw error;
        }
    }
    
    async updateSubjet(data){

    }

    async deleteSubjet(req){
        try {
            console.log('ejecutando eliminado');
            const delSubjet = await req.subjet.destroy();            
            if (!delSubjet){
                console.log("No se pudo eliminar el registro de la base de datos");
                return null;
            }
            console.log('Asignatura eliminada con éxito');            
        } 
        catch (error) {
            console.log("No se pudo eliminar el registro de la base de datos", error);
            throw error;
        }
    }
}

module.exports = SubjectService;

/* Primera Tarea */
/*
class SubjectService {
    constructor() {      
    }

    async getAllRecords(){
        try {
            const AllSubjects = await sql `SELECT * FROM subjects`;
            return AllSubjects;
        }
        catch (error){
            console.error('Error al consultar en la base de datos', error);
        }
        finally {
            await sql.end();
        }
    }
  
    async findOne(id) {    
        try {
            const subject = await sql `SELECT * FROM subject WHERE id = ${id}`;
            return subject;
        }
        catch (error){
            console.error('Error al consultar la base de datos', error);
        }
        finally {
            await sql.end();
        }
    }

    async create({subject_id, subject_code, subject_name, subject_description, subject_objetive, subject_credits, subject_level, carrer_id, department_id, teacher_id, subject_scheduled, subject_start, subject_end, subject_status, created_on}){
        try {
            const insertSubject = await sql `INSERT into subject (subject_id, subject_code, subject_name, subject_description, subject_objetive, subject_credits, subject_level, carrer_id, department_id, teacher_id, subject_scheduled, subject_start, subject_end, subject_status, created_on) VALUES (${subject_id}, ${subject_code}, ${subject_name}, ${subject_description}, ${ubject_objetive}, ${subject_credits}, ${subject_level}, ${carrer_id}, ${department_id}, ${teacher_id}, ${subject_scheduled}, ${subject_start}, ${subject_end}, ${subject_status}, ${created_on})`;
            return true;
        } catch (error) {
            console.error('Error al insertar en la base de datos', error);
            return false;            
        }
        finally {
            await sql.end();
        }
    }
  
    async update({subject_id, subject_code, subject_name, subject_description, subject_objetive, subject_credits, subject_level, carrer_id, department_id, teacher_id, subject_scheduled, subject_start, subject_end, subject_status}) {
        const now = new Date();
        try {
            const updateSubject = await sql `UPDATE FROM subject SET subject_code = ${subject_code}, subject_name = ${subject_name}, subject_description = ${subject_description}, subject_objetive = ${subject_objetive}, subject_credits = ${subject_credits}, subject_level = ${subject_level}, carrer_id = ${carrer_id}, department_id = ${department_id}, teacher_id = ${teacher_id}, subject_scheduled = ${subject_scheduled}, subject_start = ${subject_start}, subject_end = ${subject_end}, subject_status = ${subject_status}, updated_at = ${now} WHERE id = = ${subject_id}`;
            return true;            
        } catch (error) {
            console.error('Error al insertar en la base de datos', error);
            return false; 
        }
        finally {
            await sql.end();
        }
    }
  
    async delete(id) {
        try {
            const deleteSubject = await sql `DELETE FROM subject WHERE id = ${id}`;
            return true;
        }
        catch (error){
            console.error('Error al consultar la base de datos', error);
            return false;
        }
        finally {
            await sql.end();
        }
    }
  }

module.exports = SubjectService;
*/