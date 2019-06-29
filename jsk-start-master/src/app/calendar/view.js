import {calendar} from "./model"
import {getEvents} from "../eventForm/model"
import {onDayClick} from "./controller"


export const getButtons = (currentYear, currentMonth) => {
    
    const buttonPrev = document.querySelector("#prev");
    const buttonNext = document.querySelector("#next");
    
    const addListner = (action) => {
        
        buttonNext.addEventListener("click", () => {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
            action(currentYear, currentMonth);
        })

        buttonPrev.addEventListener("click", () => {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
            action(currentYear, currentMonth);
        })
    }
    return {
        addListner
    }
}

export const generateViewCalendar = (currentYear, currentMonth) => {

        const calendarWeeks = calendar.monthDays(currentYear, currentMonth);
        const calendarDiv = document.getElementById("calendarDays");
        calendarDiv.innerHTML = "";
        const today = new Date();

        for (let week of calendarWeeks) {
            let weekDiv = generateWeekDiv();
            for (let day of week) {
                const currentDate = getCurrentDateInCorrectFormat(currentYear, currentMonth, day);
                let dayDiv = generateDayDiv(day);
                changeBorderColorForActualDay(dayDiv, day, today, currentMonth, currentYear);
                generateNumberOfEventsForDay(dayDiv, currentDate);
                weekDiv.appendChild(dayDiv);
            }
            calendarDiv.appendChild(weekDiv);
        }
        setOnCalendarSpecifiedMonthAndYear(currentYear, currentMonth);
}


export const addDaysListeners = () => {

    const days = document.getElementsByClassName("day");
    for (let day of days){
        day.addEventListener("click", function(e) {
            const dateDay = e.srcElement.innerText;
            console.log(dateDay);
            const date = dateDay.substring(0,2).replace(' ', '');
            const formattedDate = (date.length === 1) ? `0${date}` : date;
            const currentMonthAndYear = document.getElementById("currentMonthAndYear").dataset.date;
            onDayClick(currentMonthAndYear + formattedDate);
        });
    }
}

export const generateNumberOfEventsForDay = (dayDiv, currentDate) => {

    let size = 0;
    for (let event of getEvents()){
        if (event.date === currentDate){
            size++; 
        }
    }
    if (size != 0){
        let span = document.createElement("span");
        span.className = "spanEvent position-relative";
        span.style = "top: -7px; left: -48px"
        span.innerText = "  " + size;
        dayDiv.append(span);
    }
}

export const setOnCalendarSpecifiedMonthAndYear = (currentYear, currentMonth) => {

    let mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthAndYearNode = document.getElementById("currentMonthAndYear");
    currentMonthAndYearNode.innerHTML = mlist[currentMonth] + " " + currentYear;
    currentMonthAndYearNode.dataset.date = currentYear + "-" + (currentMonth > 9 ? "" : "0") + (currentMonth + 1) + "-";
    addDaysListeners();
}

export const changeBorderColorForActualDay = (dayDiv, day, today, currentMonth, currentYear) => {

    if ((day === today.getDate()) 
        && (currentMonth === today.getMonth())
        && (currentYear === today.getFullYear())){
            dayDiv.style.borderColor = "orange";
        }
}

export const generateDayDiv = (day) => {

    let dayDiv = document.createElement("div");
    dayDiv.innerText = day > 0 ? day : '';
    dayDiv.className = day > 0 ? "day col text-center btn btn-outline-primary" : "emptyDay col btn btn-outline-primary inactive-button";
    return dayDiv;
}

export const generateWeekDiv = () => {

    let weekDiv = document.createElement("div");
    weekDiv.className = "week row";
    return weekDiv;
}

export const getCurrentDateInCorrectFormat = (currentYear, currentMonth, day) => {

    return currentYear + "-" + (currentMonth > 9 ? "" : "0") + (currentMonth + 1) + "-" + (day > 9 ? "" : "0") + day;
}