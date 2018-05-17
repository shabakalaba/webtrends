// enums
enum months {
    January = 1, // Assigning the first index
    February,
    March,
    April,
    May,
    June, 
    July,
    August,
    September,
    October, 
    November,
    December
}

enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

console.log("Months enum:");
console.log(months);
console.log('January: ' + months.January);
console.log('Month 1: ' + months[1]);

// html elements
// similar to var
let pTodayDate = document.getElementById("p--today-date");

// Today's date
let today: Date = new Date();
console.log(today);

// Today's month
console.log(today.getMonth());
let todayMonth : string = months[today.getMonth()];

// Today's day of week
console.log(today.getDay());
let todayDayOfWeek : string = days[today.getDay()];

// Today's day of month
console.log(today.getDate());

// Today's year
console.log(today.getFullYear());

//display todays date to page
pTodayDate.innerHTML = `Today is ${ todayDayOfWeek }, ${ todayMonth } ${ today.getDate() }, ${ today.getFullYear() }`;

let birthdateBtn = document.getElementById("button--birthday");
let inputBirthdate = document.getElementById("input--date-picker");
let pBirthdayMessage = document.getElementById("p--birthday-message");
birthdateBtn.onclick = function () {
    let birthday: Date = new Date(inputBirthdate.value);
    todayBirthday(birthday);
}

function todayBirthday(birthday) {
    let birthdayMonth: string = months[birthday.getMonth()];
    let birthdayDayOfWeek: string = days[birthday.getDay()];
    console.log(birthday + " " + today);
    if(birthday === today){
        pBirthdayMessage.innerHTML = `Happy Birthday!`;
    } else {
        pBirthdayMessage.innerHTML = `Your birthday will be on ${ birthdayDayOfWeek }, ${ birthdayMonth } ${ birthday.getDate() }, ${ birthday.getFullYear() }`;
    }

}