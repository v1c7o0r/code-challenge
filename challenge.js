const studentsMarks= parseInt(prompt("Enter Marks (0-100):"));
if (isNaN(studentsMarks)||studentsMarks<0|| studentsMarks>100) {
    console.log("Invalid input enter a students marks between 0 and 100.");
    
} else {
    let grade;
    if(studentsMarks >= 85){
        grade = "A";
    }else if(studentsMarks >= 79){ 
        grade = "A-";
    }else if( studentsMarks >= 75){ 
        grade ="B+";
    }else if( studentsMarks >= 70){
        grade ="B";
    }else if (studentsMarks >= 66){ 
        grade ="B-";
    }else if (studentsMarks >= 60){
        grade ="C+";
    }else if (studentsMarks >= 56){
        grade ="C";
    }else if ( studentsMarks >= 50){
        grade ="C-";
    }else if ( studentsMarks >= 46){
        grade ="D+";
    }else if ( studentsMarks >= 40){
        grade = "D";
    }else if ( studentsMarks >= 36){
        grade = "D-"
    }else  {
        grade ="E"
    }
console.log("Grade:" + grade)
    
}