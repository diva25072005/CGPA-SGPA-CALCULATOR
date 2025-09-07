// Map letter grades to points
const grades = { O:10, "A+":9, A:8, "B+":7, B:6, C:5, P:4, F:0 };

// Function to create subject inputs
function createInputs() {
    const n = parseInt(document.getElementById("numSubjects").value);
    const container = document.getElementById("container");
    container.innerHTML = "";

    if(isNaN(n) || n <= 0 || n > 15){
        alert("Enter a valid number of subjects (1-15)");
        return;
    }

    for(let i=1; i<=n; i++){
        const div = document.createElement("div");
        div.innerHTML = `
            Grade ${i}: <input type="text" id="grade${i}" placeholder="A+, B, O">
            Credit ${i}: <input type="number" id="credit${i}" placeholder="3" min="1">
        `;
        container.appendChild(div);
    }
}

// Function to calculate SGPA
function calculateSGPA() {
    const n = parseInt(document.getElementById("numSubjects").value);
    let totalPoints = 0, totalCredits = 0;

    for(let i=1; i<=n; i++){
        const grade = document.getElementById(`grade${i}`).value.toUpperCase().trim();
        const credit = parseFloat(document.getElementById(`credit${i}`).value);

        if(!(grade in grades) || isNaN(credit)){
            alert(`Invalid input for Subject ${i}`);
            return;
        }

        totalPoints += grades[grade] * credit;
        totalCredits += credit;
    }

    document.getElementById("result").innerText = `Your SGPA is: ${(totalPoints/totalCredits).toFixed(2)}`;
}
