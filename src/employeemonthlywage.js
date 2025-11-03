const prompt = require('prompt-sync')({ sigint: true });

function calculateMonthlySalary() {
    const RATE_PER_HOUR = 20;
    console.log("\n Employee Monthly Salary Computation \n");

    
    let workHoursPerDay;
    do {
        workHoursPerDay = parseInt(prompt("Enter working hours per day (1-8): "), 10);
        if (isNaN(workHoursPerDay) || workHoursPerDay < 1 || workHoursPerDay > 8) {
            console.log(" Please provide a valid number between 1 and 8.");
        }
    } while (isNaN(workHoursPerDay) || workHoursPerDay < 1 || workHoursPerDay > 8);

    let totalWorkingDays;
    do {
        totalWorkingDays = parseInt(prompt("Enter total working days in the month (1-31): "), 10);
        if (isNaN(totalWorkingDays) || totalWorkingDays < 1 || totalWorkingDays > 31) {
            console.log(" Enter a valid number of days (1–31).");
        }
    } while (isNaN(totalWorkingDays) || totalWorkingDays < 1 || totalWorkingDays > 31);

    const wagePerDay = workHoursPerDay * RATE_PER_HOUR;
    const totalMonthlyPay = wagePerDay * totalWorkingDays;

    const empCategory = workHoursPerDay === 8 ? "Full-Time Employee" : "Part-Time Employee";

    console.log("\n --- Monthly Wage Details ---");
    console.log(`Type of Employee : ${empCategory}`);
    console.log(`Working Hours/Day : ${workHoursPerDay}`);
    console.log(`Total Days Worked : ${totalWorkingDays}`);
    console.log(`Pay Rate (per hour): ₹${RATE_PER_HOUR}`);
    console.log(`Daily Earnings : ₹${wagePerDay}`);
    console.log(`Total Monthly Salary : ₹${totalMonthlyPay}`);
    console.log("-------------------------------\n");
}



module.exports = calculateMonthlySalary;
