const locStor = localStorage.getItem('student')
console.log('it hereee')
if(locStor == null){
    console.log('Storage is empty')
} else {
    let student = localStorage.getItem('student')
    document.getElementById('li').append(student);
    console.log('is it here?')
}

const run = (val) => {
    let newStudent = document.createTextNode(val)
    document.getElementById('li').append(newStudent);
    localStorage.setItem('student', val)
}

const clearStorage = () => {
    console.log('Clear Storage')
    localStorage.clear()
}