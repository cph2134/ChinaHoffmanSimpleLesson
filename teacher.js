

//borrowed from Tinker
//helper function
function printLog(selector, message){
	document.querySelector(selector).innerHTML += message + "\n";
}

//save name entered to student name to a variable.

function getStudent() {
	var name = document.getElementById('studentName');
  var stuName = name.value;
    document.querySelector('#scorecard').innerHTML += stuName + " ";
}


//combine name and score
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
function reportStudentScores() {
  getStudent();
  var arr = document.getElementsByName("rubricScore");
  var total = 0;
  for (var i = 0; i <arr.length; i++) {
    if(parseInt(arr[i].value)){
      total += parseInt(arr[i].value);

    }
  }
  document.querySelector('#scorecard').innerHTML += total + "\n";
	//printLog('#scorecard', total);
}



//print out student name and score to text box  when submit is clicked and clear all entries.
//if submit is pressed without a student name, print an alert that says "missing student name!"
// if submit is pressed without all 3 text boxes filled in, print an alert that says "missing score(s)!"
