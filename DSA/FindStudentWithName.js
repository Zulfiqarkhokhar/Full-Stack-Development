
// this is data structure used for problem
let studentsName = ["Zulfiqar","Ali", "Ahmed", "Ayesha", "Fatima", "Hassan", "Hussain", "Imran", "Kashif", "Naveed"];


// this is solution or we can say algorithm to find student with name in array of studentsName
let findStudentWithName = (studentsName, name) =>{

    for(let i=0;i<studentsName.length;i++){
        if(studentsName[i] === name){
            return `Student with name ${name} is found at index ${i}`;
        }
    }
    return `Student with name ${name} is not found`;
}

let result =findStudentWithName(studentsName, "Ayesha");
console.log(result);