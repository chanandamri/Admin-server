const classController = require("DL/controllers/classController.js");

exports.getAllClassForTeacher = async (teacherID) => {
    const classes = await classController.read({ teacherId: teacherID })
    if (classes.length === 0) throw ({ code: 400, msg: "there are no classes" })
    return classes
}
exports.getUniqueClassID = async () => {
    return (Date.now() % 10000000000)
}