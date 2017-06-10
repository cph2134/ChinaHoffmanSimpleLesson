//borrowed from Tinker
/* helper function
function printLog(selector, message){
	document.querySelector(selector).innerHTML += message + "\n";
}
*/
//save name entered to student name to a variable.

function getStudent() {
  var name = document.getElementById('studentName');
  var stuName = name.value;
  document.querySelector('#scorecard').innerHTML += stuName + " ";
}


//combine name and score - not using
function makeStudentReport(name, score) {
  return name + ": " + score;
}

//sum up the scores entered in each score box and record in scorecard
/*
function addUpScores() {
  var arr = document.getElementsByName("rubricScore");
  var total = 0;
  for (var i = 0; i <arr.length; i++) {
    if(parseInt(arr[i].value)){
      total += parseInt(arr[i].value);

    }
  }
	printLog('#scorecard', total);
}
*/
//print out student name and total scores to scorecard.
function reportScores() {
  getStudent();
  var arr = document.getElementsByName("rubricScore");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      total += parseInt(arr[i].value);

    }
  }
  document.querySelector('#scorecard').innerHTML += total + "\n";
  resetRubric();
}

function resetRubric() {
  document.getElementById("studentRubric").reset();
}

//if submit is pressed without a student name or a score, print an alert that says "missing student name! and don't run reportScores()"

function validateAndReportScores() {
  var a = document.forms["rubric"]["student"].value;
  var b = document.forms["rubric"]["skillOneScore"].value;
  var c = document.forms["rubric"]["skillTwoScore"].value;
  var d = document.forms["rubric"]["skillThreeScore"].value;
  if (a == "" || b == "" || c == "" || d == "") {
    alert("Missing name or score");
    return false;
  } else {
    reportScores();
  }
}
