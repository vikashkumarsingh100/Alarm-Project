// declaring variables

let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');
let ampm = document.querySelector('#AMPM');
let setAlarm = document.querySelector('#setAlarm');
let sethour = document.querySelector('#sethour');
let setminute = document.querySelector('#setminute');
let setsecond = document.querySelector('#setsecond');
let setampm = document.querySelector('#setampm');
let alarmlist = document.querySelector('#alarmlist');

// This function will set the current time and it will be called each second
function printTime() {
    let currentdate = new Date();
    hour.innerText = currentdate.getHours() % 12;
    minute.innerText = currentdate.getMinutes();
    second.innerText = currentdate.getSeconds();
    if (currentdate.getHours() > 12) {
        ampm.innerText = 'PM';
    } else {
        ampm.innerText = 'AM';
    }
    let checkhour = document.querySelectorAll('.checkhour');
    let checkminute = document.querySelectorAll('.checkminute');
    let checksecond = document.querySelectorAll('.checksecond');
    let checkampm = document.querySelectorAll('.checkampm');

// the below loop will iterate through alrmlist and if match is found with current
// time, it will give an alert
    for (let i = 0; i < checkhour.length; i++) {


        if (checkhour[i].innerText == hour.innerText && checkminute[i].innerText == minute.innerText && checksecond[i].innerText == second.innerText && ampm.innerText == checkampm[i].innerText) {

            alert('Alarm is ringing');
            break;
        }

    }
}
// click event to add alarm and remove alarm 
setAlarm.addEventListener('click', () => {

    alarmlist.innerHTML = alarmlist.innerHTML +
        `
    <li class='removealarm'>
    <span class='checkhour'>${sethour.value}</span>:
    <span class='checkminute'>${setminute.value}</span>:
    <span class='checksecond'>${setsecond.value}</span>
    <span class='checkampm'>${setampm.value}</span>
    <button >remove Alarm</button>
    </li>
    `
    let removealarm = alarmlist.querySelectorAll('li');
    for (let j of removealarm) {
        j.addEventListener('click', () => {
            j.remove();
        })
    }


})



setInterval(printTime, 1000);