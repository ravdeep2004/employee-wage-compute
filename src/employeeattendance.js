// Usecase 1 : To Check Employee is Present or Absent

function empattendance(){
    const IS_PRESENT = 1;

    let empCheck = Math.floor(Math.random() * 2);

    if (empCheck === IS_PRESENT) {
        console.log("Employee is Present");
    } else {
        console.log("Employee is Absent");
    }
}

module.exports = empattendance;

