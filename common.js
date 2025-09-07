// Function to add new SGPA input field
function addCgpaField() {
    const container = document.getElementById("cgpa-inputs");

    const input = document.createElement("input");
    input.type = "number";
    input.step = "0.01";
    input.placeholder = `Semester ${container.children.length + 1} SGPA`;
    input.className = "sgpa-input";

    container.appendChild(input);
}

// Function to calculate CGPA
function calculateCgpa() {
    const inputs = document.querySelectorAll(".sgpa-input");
    let total = 0;
    let count = 0;

    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            total += value;
            count++;
        }
    });

    if (count === 0) {
        document.getElementById("cgpa-result").textContent = "⚠ Please enter at least one SGPA.";
        return;
    }

    const cgpa = total / count;
    document.getElementById("cgpa-result").textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
