const locStor = localStorage.getItem('student')
if(locStor == null){
    console.log('Storage is Empty')
    document.getElementById('li').append('Storage is Empty');
} else {
    let student = localStorage.getItem('student')
    document.getElementById('li').append(student);
}

const run = (val) => {
    let newStudent = document.createTextNode(val)
    // document.getElementById('li').append(newStudent);
    localStorage.setItem('student', val)
}

const clearStorage = () => {
    localStorage.clear()
}