import { generateViewCalendar, getButtons } from "./view"
import { renderEvents } from '../eventsList/controller'

var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();


export const getCalendarView = () => {
    generateViewCalendar(currentYear, currentMonth);
    getButtons(currentYear, currentMonth).addListner(generateViewCalendar);
}

export const onDayClick = (day) => {
    renderEvents(day);
}