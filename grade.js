function calculateGrade() {
    var totalMarks = parseFloat(document.getElementById("totalMarks").value);
   var grade =0;

    if (totalMarks >= 90) {
        grade = "A";
    } else if (totalMarks >= 85) {
        grade = "A-";
    } else if (totalMarks >= 80) {
        grade = "B+";
    } else if (totalMarks >= 75) {
        grade = "B";
    } else if (totalMarks >= 70) {
        grade = "B-";
    } else if (totalMarks >= 65) {
        grade = "C+";
    } else if (totalMarks >= 60) {
        grade = "C";
    } else if (totalMarks >= 55) {
        grade = "C-";
    } 
    else if (totalMarks >= 50) {
        grade = "D+";
    }else if (totalMarks >= 45) {
        grade = "D";
    }else {
        grade = "F";
    }
    console.log("finalGrade:" +grade);
    document.getElementById("result").innerText = "finalGrade:" + grade;


    //document.getElementById("finalGrade").textContent = +grade;
    
}

