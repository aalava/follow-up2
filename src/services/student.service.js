const Student = require("../db/models/student.model");

class StudentService {
  async findAll() {
    const students = await Student.findAll();
    return students;
  }

  async findOne(id) {
    const student = await Student.findByPk(id);
    return student;
  }

  async create(data) {
    const student = await Student.create(data);
    return student;
  }

  async update(id, data) {
    const student = await Student.findByPk(id);
    if (!student) {
      throw new Error("Estudiante no encontrado");
    }

    await student.update(data);

    return student;
  }

  async delete(id) {
    const student = await Student.findByPk(id);
    if (!student) {
      throw new Error("Estudiante no encontrado");
    }

    await student.destroy();

    return student;
  }
}

module.exports = StudentService;
