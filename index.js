

// function createEmployeeRecord(data) {
//     return {
//         firstName: data[0],
//         familyName: data[1],
//         title: data[2],
//         payPerHour: data[3],
//         timeInEvents: [],
//         timeOutEvents: []

//     };
    
// }
// function createEmployeeRecords(employeeDataArray) {
//     return employeeDataArray.map(createEmployeeRecord);
// }
// //create a time out event
// function createTimeInEvent(employeeRecord, dateTime) {
//     const [date, hour] = dateTime.split(' ');
//     employeeRecord.timeInEvents.push({
//         type: 'TimeIn',
//         hour: parseInt(hour),
//         date: date
//     });
//     return employeeRecord;
// }
// let createTimeOutEvent = function(employee, dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     employee.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return employee
// }

// let hoursWorkedOnDate = function(employee, soughtDate){
//     let inEvent = employee.timeInEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     let outEvent = employee.timeOutEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     return (outEvent.hour - inEvent.hour) / 100
// }

// let wagesEarnedOnDate = function(employee, dateSought){
//     let rawWage = hoursWorkedOnDate(employee, dateSought)
//         * employee.payPerHour
//     return parseFloat(rawWage.toString())
// }

// let allWagesFor = function(employee){
//     let eligibleDates = employee.timeInEvents.map(function(e){
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function(memo, d){
//         return memo + wagesEarnedOnDate(employee, d)
//     }, 0)

//     return payable
// }

// let findEmployeeByFirstName = function(srcArray, firstName) {
//   return srcArray.find(function(rec){
//     return rec.firstName === firstName
//   })
// }

// let calculatePayroll = function(arrayOfEmployeeRecords){
//     return arrayOfEmployeeRecords.reduce(function(memo, rec){
//         return memo + allWagesFor(rec)
//     }, 0)
// }