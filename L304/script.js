let student_amount = +prompt("Select Amount of Student");
let student_name = ['Sergi', 'Robi', 'Nodo', 'Lasha', 'Oto'];
if (student_amount > student_name.length || student_amount <= 0) {
 alert("arasworia, sheitanet 10ze naklebi");
}    

else{
    for (let i = 0; i < student_amount; i++) {
        alert(student_name[i]);


    }
}

