
// Prevent Enter Button from doing anything
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    });
});

// Function to submit values
const submitValue = () => {
    // Retrieve values from input fields
    let TheoryMarks = [];
    let AssignmentMarks = [];
    for (let i = 1; i <= 8; i++) {
        TheoryMarks.push(parseFloat(document.getElementById(`theory-${i}`).value));
        AssignmentMarks.push(parseFloat(document.getElementById(`Assignment-${i}`).value));
    }

    // Calculate individual totals
    let totals = [];
    for (let i = 0; i < 8; i++) {
        totals[i] = SingleCalculation(TheoryCalculation(TheoryMarks[i]), AssignmentCalculation(AssignmentMarks[i]));
        document.getElementById(`total-${i + 1}`).textContent = totals[i];
        document.getElementById(`total-${i + 1}`).style.display = "flex";
    }

    // Calculate and log overall total
    let totalTheoryMarks = TheoryMarks.reduce((acc, mark) => acc + TheoryCalculation(mark), 0);
    let totalAssignmentMarks = AssignmentMarks.reduce((acc, mark) => acc + AssignmentCalculation(mark), 0);

    let Result = TotalCalculation(totalTheoryMarks, totalAssignmentMarks);
    document.getElementById("totalMarksObtained").innerHTML = "Total marks Obtained :- " + Result + " / 800";

    let TotalPercentage = TotalPercent(Result);
    document.getElementById("totalPercentage").innerHTML = "Total Percentage Obtained :- " + TotalPercentage + "%";
}

// Function to calculate single combined total for theory and assignment
const SingleCalculation = (theory, assignment) => {
    return theory + assignment;
}

// Function to calculate theory marks for a subject
const TheoryCalculation = (theory) => {
    return (theory / 100) * 70;
}

// Function to calculate assignment marks for a subject
const AssignmentCalculation = (assignment) => {
    return (assignment / 100) * 30;
}

// Function to calculate total marks
const TotalCalculation = (totalTheory, totalAssignment) => {
    return totalTheory + totalAssignment;
}

// Function to calculate the percentage obtained 
const TotalPercent = (result) => {
    return (result / 800) * 100;
}

// Function to clear all input fields and results
const clearFields = () => {
    // Clear all input fields
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`theory-${i}`).value = '';
        document.getElementById(`Assignment-${i}`).value = '';
        document.getElementById(`total-${i}`).textContent = '';
    }

    // Clear overall results
    document.getElementById("totalMarksObtained").innerHTML = 'Total marks Obtained :-';
    document.getElementById("totalPercentage").innerHTML = 'Total Percentage Obtained :-';
}
