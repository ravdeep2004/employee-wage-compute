const prompt = require("prompt-sync")({ sigint: true });

class CompanyPayroll {
    calculateCompanyWage(orgName, payRate, maxWorkingDays, maxWorkingHrs) {
        let accumulatedHours = 0;
        let dayCounter = 0;

        console.log(`\n Enter Work Details for: ${orgName}`);

        while (dayCounter < maxWorkingDays && accumulatedHours < maxWorkingHrs) {
            dayCounter++;
            let dailyHours = parseInt(prompt(`Hours worked on Day ${dayCounter}: `), 10);

            if (isNaN(dailyHours) || dailyHours < 0) {
                console.log(" Invalid input! Please enter a valid number.");
                dayCounter--;
                continue;
            }

            if (accumulatedHours + dailyHours > maxWorkingHrs) {
                console.log(" Limit reached! Monthly hour cap exceeded.");
                break;
            }

            if (dailyHours < 8) {
                console.log(`Day ${dayCounter}:  Part-Time (${dailyHours} hrs)`);
            } else if (dailyHours === 8) {
                console.log(`Day ${dayCounter}:  Full-Time (${dailyHours} hrs)`);
            } else {
                console.log(`Day ${dayCounter}:  Overtime (${dailyHours} hrs)`);
            }

            accumulatedHours += dailyHours;
        }

        const computedWage = accumulatedHours * payRate;

        console.log(`\n --- ${orgName} Monthly Summary ---`);
        console.log(`Days Worked        : ${dayCounter}`);
        console.log(`Total Hours Logged : ${accumulatedHours}`);
        console.log(`Hourly Rate        : ₹${payRate}`);
        console.log(`Final Salary       : ₹${computedWage}`);
        console.log("--------------------------------------------");

        return { orgName, dayCounter, accumulatedHours, computedWage };
    }
}


function processMultipleCompanies() {
    const payrollObj = new CompanyPayroll();
    const totalCompanies = parseInt(prompt("Enter how many companies to calculate wages for: "), 10);

    for (let i = 1; i <= totalCompanies; i++) {
        console.log(`\n--- Company #${i} ---`);
        const orgName = prompt("Enter company name: ");
        const payRate = parseInt(prompt("Enter hourly pay rate: "), 10);
        const maxWorkingDays = parseInt(prompt("Enter max working days: "), 10);
        const maxWorkingHrs = parseInt(prompt("Enter max working hours: "), 10);

        payrollObj.calculateCompanyWage(orgName, payRate, maxWorkingDays, maxWorkingHrs);
    }
}

processMultipleCompanies();

module.exports = processMultipleCompanies;
