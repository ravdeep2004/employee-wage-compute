// Usecase 2: to calculate Daily Employee Wage

const prompt = require('prompt-sync')({ sigint: true });

function calculateDailyPay() {
    const payRate = 20;          
    const standardHours = 8;     
    let hoursWorked;

    console.log("\n=== Employee Daily Wage Computation ===");

    do {
        let userInput = prompt(`Enter total hours worked today (default ${standardHours}): `);

        if (userInput.trim() === "") {
            hoursWorked = standardHours;
            console.log(`No input given. Taking default hours: ${standardHours}`);
        } else {
            hoursWorked = parseInt(userInput, 10);
            if (isNaN(hoursWorked) || hoursWorked <= 0) {
                console.log("⚠️  Invalid input! Please enter a positive number.");
            }
        }
    } while (isNaN(hoursWorked) || hoursWorked <= 0);

    const totalPay = payRate * hoursWorked;

    console.log("\n----------------------------");
    console.log("Hours Worked:       " + hoursWorked);
    console.log("Rate per Hour:      ₹" + payRate);
    console.log("Total Daily Wage:   ₹" + totalPay);
    console.log("----------------------------\n");
}



module.exports = calculateDailyPay;
