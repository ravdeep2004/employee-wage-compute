// UC3: Add Part-Time Employee & Wage (Variable Part-Time Hours)

const prompt = require('prompt-sync')({ sigint: true });

function calculateEmployeeWage() {
    const ratePerHour = 20;
    const fullTimeHours = 8;
    let empCategory;
    let partTimeHours;

    console.log("\n=== Employee Type & Wage Computation ===");

    // Ask user for employee type
    do {
        empCategory = prompt("Enter Employee Type (F for Full-Time / P for Part-Time): ").toUpperCase();

        if (empCategory !== "F" && empCategory !== "P") {
            console.log("⚠️  Invalid input! Please enter 'F' or 'P'.");
        }
    } while (empCategory !== "F" && empCategory !== "P");

    // If part-time, ask for hours worked
    if (empCategory === "P") {
        do {
            let input = prompt("Enter number of hours worked for Part-Time: ");

            if (input.trim() === "") {
                console.log("⚠️  Input cannot be empty. Please enter hours.");
                partTimeHours = NaN;
            } else {
                partTimeHours = parseInt(input, 10);
                if (isNaN(partTimeHours) || partTimeHours <= 0) {
                    console.log("⚠️  Invalid input! Enter a positive number.");
                }
            }
        } while (isNaN(partTimeHours) || partTimeHours <= 0);
    }

    // Determine working hours
    const hoursWorked = empCategory === "F" ? fullTimeHours : partTimeHours;
    const totalWage = ratePerHour * hoursWorked;

    // Display output
    console.log("\n----------------------------");
    console.log("Employee Type:       " + (empCategory === "F" ? "Full-Time" : "Part-Time"));
    console.log("Hours Worked:        " + hoursWorked);
    console.log("Rate per Hour:       ₹" + ratePerHour);
    console.log("Total Daily Wage:    ₹" + totalWage);
    console.log("----------------------------\n");
}

calculateEmployeeWage();

module.exports = calculateEmployeeWage;
