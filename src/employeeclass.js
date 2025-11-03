const prompt = require('prompt-sync')({ sigint: true });


class EmpSalary {
    constructor(hourlyRate, fullShiftHours = 8) {
        this.hourlyRate = hourlyRate;
        this.fullShiftHours = fullShiftHours;
    }

    calculatePay(hrsWorked) {
        const category = hrsWorked === this.fullShiftHours ? "Full-Time Employee" : "Part-Time Employee";
        const dailyPay = hrsWorked * this.hourlyRate;
        return { category, hrsWorked, dailyPay };
    }
}

function classBasedWageCalc() {
    console.log("\n Employee Wage Computation (Class Implementation) ");

    const HOURLY_RATE = 20;
    const empObj = new EmpSalary(HOURLY_RATE);

    let workedHours;
    do {
        workedHours = parseInt(prompt("Enter total hours worked today (1-8): "), 10);
        if (isNaN(workedHours) || workedHours < 1 || workedHours > 8) {
            console.log(" Invalid input! Please enter a value between 1 and 8.");
        }
    } while (isNaN(workedHours) || workedHours < 1 || workedHours > 8);

    const details = empObj.calculatePay(workedHours);

    console.log("\n --- Daily Wage Summary ---");
    console.log(`Employee Type   : ${details.category}`);
    console.log(`Hours Worked    : ${details.hrsWorked}`);
    console.log(`Daily Salary    : ₹${details.dailyPay}`);
    console.log("----------------------------------\n");
}



module.exports = classBasedWageCalc;
