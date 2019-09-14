const locStor = localStorage.getItem('student')
if(locStor == null){
    let noStudent = document.createElement("li")
    let noStudentValue = document.createTextNode("Storage is Empty")
    noStudent.setAttribute("id", "new_student")
    noStudent.appendChild(noStudentValue)
    console.log('Storage is Empty')
    document.getElementById('li').append(noStudent);
} else {
    let student = localStorage.getItem('student')
    document.getElementById('li').append(student);
}

const run = (val) => {
    let newStudent = document.createElement("li")
    let studentName = document.createTextNode(val)
    newStudent.appendChild(studentName)
    newStudent.setAttribute("id", "new_student")
    document.getElementById('li').append(newStudent);
    localStorage.setItem('student', val)
}

const clearStorage = () => {
    document.getElementById('new_student').remove()
    localStorage.clear()
}