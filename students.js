const express = require("express");
const router = express.Router();
const student1 = {
	id: 1,
	firstName: 'Ivan',
	lastName: 'Ivanov',
	group: 'VIS21'
};
const student2 = {
	id: 2,
	firstName: 'van',
	lastName: 'vanov',
	group: 'VIS21'
};
let students = [student1,student2];

router.get('/students', (req, res) => {
    res.send(students);
});

router.post('/students', (req, res) => {
    const newStudent = {id, firstName, lastName, group} = req.body;
    students.push(newStudent);
});

router.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const findStudent = students.find((student) => student.id === id);
    res.send(findStudent);
});

router.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((student) => student.id === id);
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.group = req.body.group; 
});

router.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    students = students.filter((student) => student.id !== id);
});

module.exports = router;