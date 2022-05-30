const students = [
    {name : 'harry', subject : 'Javascript'},
    {name : 'Rohan', subject : 'Machine Learning'}
]

function enrollStudent(student){

    return new Promise(function (resolve, reject) {
        
        setTimeout(function(){
            students.push(student);
            console.log('student enrolled');
            if (!error){
                resolve()
            }
            else{
                reject();
            }
        }, 8000);
    })
}

function getStudents() {
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("student fetched");
    }, 3000);
}

let newStudent = {name : "Sunny", subject:"Python"}
enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log("some error occured");
});
// getStudents();