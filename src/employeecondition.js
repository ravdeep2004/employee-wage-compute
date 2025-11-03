const prompt = require('prompt-sync')({ sigint: true });

function calculateConditionalSalary() {
    const PAY_PER_HOUR = 20;
    const MAX_WORK_HOURS = 100;
    const MAX_WORK_DAYS = 20;

    console.log("\n Employee Conditional Salary Computation ");

    let accumulatedHours = 0;
    let dayCounter = 0;

    
    while (!(accumulatedHours >= MAX_WORK_HOURS && dayCounter >= MAX_WORK_DAYS)) {
        let todayHours;

        do {
            todayHours = parseInt(prompt(`Enter hours worked on Day ${dayCounter + 1} (1-8): `), 10);
            if (isNaN(todayHours) || todayHours < 1 || todayHours > 8) {
                console.log(" Invalid entry! Please input hours between 1 and 8.");
            }
        } while (isNaN(todayHours) || todayHours < 1 || todayHours > 8);

        accumulatedHours += todayHours;
        dayCounter++;
    }

    const totalEarnings = accumulatedHours * PAY_PER_HOUR;
    const empStatus = accumulatedHours / dayCounter === 8 ? "Full-Time Employee" : "Part-Time Employee";

    console.log("\n --- Conditional Wage Summary ---");
    console.log(`Employee Type        : ${empStatus}`);
    console.log(`Days Worked          : ${dayCounter}`);
    console.log(`Total Hours Completed: ${accumulatedHours}`);
    console.log(`Hourly Pay Rate      : ₹${PAY_PER_HOUR}`);
    console.log(`Total Monthly Pay    : ₹${totalEarnings}`);
    console.log("----------------------------------\n");
}



module.exports = calculateConditionalSalary;
