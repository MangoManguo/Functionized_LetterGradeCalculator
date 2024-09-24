// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById("eng-percent").value;
  let socPercent = +document.getElementById("soc-percent").value;
  let mathPercent = +document.getElementById("math-percent").value;
  let sciPercent = +document.getElementById("sci-percent").value;

  // Calculate & Output Letter Grades
  document.getElementById("eng-letter").innerHTML = letterGradeCalc(engPercent);
  document.getElementById("soc-letter").innerHTML = letterGradeCalc(socPercent);
  document.getElementById("math-letter").innerHTML =
    letterGradeCalc(mathPercent);
  document.getElementById("sci-letter").innerHTML = letterGradeCalc(sciPercent);

  function letterGradeCalc(percentage) {
    let letterGrade;
    if (percentage >= 80) {
      letterGrade = "A";
    } else if (percentage >= 65) {
      letterGrade = "B";
    } else if (percentage >= 55) {
      letterGrade = "C";
    } else if (percentage >= 50) {
      letterGrade = "D";
    } else {
      letterGrade = "F";
    }
    return letterGrade;
  }
}
