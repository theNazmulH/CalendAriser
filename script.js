/*
CalendAriser, Vanilla JS Calendar
 Created By Nazmul Hussain
 www.nazmul.me
*/

const date = new Date();
const renderCalendAriser = () => {

    // date.setDate(1);
    const month = date.getMonth();
    const monthDays = document.getElementById('days');
    const year = date.getFullYear();

    // const firstDay = new Date(year, month, 1).getDay();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(year, month + 1, 0).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const prevLastDay = new Date(year, month, 0).getDate();
    const nextDays = 7 - lastDayIndex - 1;
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    let days = '';

    for (let j = firstDayIndex; j > 0; j--) {
        days += `<div class="prevDay">${prevLastDay-j+1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {

        if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            days += `<div class="singleDay today">${i}</div>`;
        } else {
            days += `<div class="singleDay">${i}</div>`;
        }
    }
    for (let k = 1; k <= nextDays; k++) {
        days += `<div class="nextDay">${k}</div>`;
    }
    document.getElementById('calendAriser').innerHTML = `<div class="month"><i class="fas fa-angle-left prev" id="prev"></i><div class="date" id="date"><h1>${months[month]}</h1><p>${date.toDateString()}</p>
    </div><i class="fas fa-angle-right next" id="next"></i></div><div class="weekdays"><div class="day">Sun</div><div class="day">Mon</div><div class="day">Tue</div><div class="day">Wed</div><div class="day">Thu</div><div class="day">Fri</div><div class="day">Sat</div></div>
<div class="days" id="days">
${days}
</div>`;
    
document.getElementById('prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendAriser();
});

document.getElementById('next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendAriser(); 
});
}
renderCalendAriser(); 

