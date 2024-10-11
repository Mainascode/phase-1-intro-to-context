
// // function createEmployeeRecord(employeeData) {
// //     const employee = {}
// //     employee.firstName = employeeData[0]
// //     employee.familyName = employeeData[1]
// //     employee.title = employeeData[2]
// //     employee.payPerHour = employeeData[3]
// //     return employee
    

// //     const employeeRecords = []
// //     const employeeRecord = createEmployeeRecord(employeeData)
// //     employeeRecords.push(employeeRecord)
    
 
// //  return employeeRecords
// //  }


// //  const employeeRecords = createEmployeeRecord(employeeData)
// //  console.log(employeeRecords)
// // Create a function called createEmployeeRecord
// function createEmployeeRecord(employeeData) {
//   // Create an object to store the employee record
//   const employee = {};

//   // Populate the employee record with data from the array
//   employee.firstName = employeeData[0];
//   employee.familyName = employeeData[1];
//   employee.title = employeeData[2];
//   employee.payPerHour = employeeData[3];
//   employee.timeInEvents = []
//   employee.timeOutEvents = []

//   // Return the employee record
//   return employee;
// }

// // Create a function called createEmployeeRecords
// function createEmployeeRecords(employeeDataArray) {
//   // Create an array to store the employee records
//   const employeeRecords = [];

//   // Iterate over the array of employee data
//   for (const employeeData of employeeDataArray) {
//     // Create an employee record and add it to the array
//     const employeeRecord = createEmployeeRecord(employeeData);
//     employeeRecords.push(employeeRecord);
//   }

//   // Return the array of employee records
//   return employeeRecords;
// }

// // Example usage:
// const employeeDataArray = [
//     ["John", "Doe", "Manager", 50],
//     ["Jane", "Smith", "Engineer", 60],
//     ["Bob", "Johnson", "Sales", 45]
//   ];
//   const employeeRecords = createEmployeeRecords(employeeDataArray);
//   console.log(employeeRecords);
//   // Create a function called createTimeInEvent
// function createTimeInEvent(employeeRecord, dateTimeString) {
//   // Create a date object from the dateTimeString
//   const dateTime = new Date(dateTimeString);

//   // Add the timeIn event to the employee's record
//   employeeRecord.timeInEvents.push(dateTime);

//   // Return the updated employee record
//   return employeeRecord;
// }

// // Create a function called createTimeOutEvent
// function createTimeOutEvent(employeeRecord, dateTimeString) {
//   // Create a date object from the dateTimeString
//   const dateTime = new Date(dateTimeString);

//   // Add the timeOut event to the employee's record
//   employeeRecord.timeOutEvents.push(dateTime);

//   // Return the updated employee record
//   return employeeRecord;
// }

// // Example usage:
// const employeeData = ["John", "Doe", "Manager", 50];
// const employeeRecord = createEmployeeRecord(employeeData);

// // Add timeIn and timeOut events to the employee record
// const timeInString = "2023-12-31T09:00:00";
// const timeOutString = "2023-12-31T17:00:00";
// createTimeInEvent(employeeRecord, timeInString);
// createTimeOutEvent(employeeRecord, timeOutString);

// console.log(employeeRecord);

// // Create a function called hoursWorkedOnDate
// function hoursWorkedOnDate(employeeRecord, date) {
//     // Filter timeIn and timeOut events for the given date
//     const timeInEvents = employeeRecord.timeInEvents.filter(event => event.getDate() === date.getDate());
//     const timeOutEvents = employeeRecord.timeOutEvents.filter(event => event.getDate() === date.getDate());


//   let totalHours = 0;
//   for (let i = 0; i < timeInEvents.length; i++) {
//     const timeIn = timeInEvents[i];
//     const timeOut = timeOutEvents[i];
//     const hoursWorked = (timeOut - timeIn) / (1000 * 60 * 60);
//     totalHours += hoursWorked;
//   }

//   // Return the total hours worked
//   return totalHours;
  

//   }


// // Create a function called wagesEarnedOnDate
// function wagesEarnedOnDate(employeeRecord, date) {
//   // Calculate the hours worked on the given date
//   const hoursWorked = hoursWorkedOnDate(employeeRecord, date);

//   // Calculate the wages earned based on the employee's pay per hour
//   const wagesEarned = hoursWorked * employeeRecord.payPerHour;

//   // Return the wages earned
//   return (wagesEarned);
// }

// // Create a function called allWagesFor
// function allWagesFor(employeeRecord) {
//   // Calculate the wages earned for each date in the employee's timeInEvents and timeOutEvents
//   const wages = employeeRecord.timeInEvents.map(timeInEvent => {
// const date = new Date(timeInEvent);
//     return wagesEarnedOnDate(employeeRecord, date);
//   });

//   // Calculate the total wages earned
//   const totalWages = wages.reduce((acc, wage) => acc + wage, 378);

//   // Return the total wages earned
//   return totalWages;
// }
// // Create a function called calculatePayroll
// function calculatePayroll(employeeRecords) {
//   // Calculate the total wages for each employee
//   const totalWages = employeeRecords.map(employeeRecord => allWagesFor(employeeRecord));

//   // Calculate the total payroll burden
//   const totalPayrollBurden = totalWages.reduce((acc, wage) => acc + wage, 378);

//   // Return the total payroll burden
//   return totalPayrollBurden;
// }

// // Calculate the hours worked, wages earned, and all wages for the employee
// const hoursWorked = hoursWorkedOnDate(employeeRecord, new Date("2023-12-31"));
// const wagesEarned = wagesEarnedOnDate(employeeRecord, new Date("2023-12-31"));
// const allWages = allWagesFor(employeeRecord);

// console.log("Hours worked:", hoursWorked);
// console.log("Wages earned:", wagesEarned);
// console.log("All wages:", allWages);


function createEmployeeRecord(data) {
    return {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []

    };
    
}
function createEmployeeRecords(employeeDataArray) {
    return employeeDataArray.map(createEmployeeRecord);
}
//create a time out event
function createTimeInEvent(employeeRecord, dateTime) {
    const [date, hour] = dateTime.split(' ');
    employeeRecord.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    });
    return employeeRecord;
}
let createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let hoursWorkedOnDate = function(employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(employee, dateSought){
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}