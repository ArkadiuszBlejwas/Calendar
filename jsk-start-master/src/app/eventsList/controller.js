import { renderEventsForDay } from './view'
import { getCalendarView, onDayClick } from '../calendar/controller'
import { renderTodayEvents, renderTomorrowEvents } from "../upComingEvents/controller"
import { getEvents } from "../eventForm/model"

export const renderEvents = (date) => {
    const dayEvents = getEvents().filter(event => event.date === date)
    renderEventsForDay(dayEvents);
}

export const removeEvent = (event) => {
    const indexOfEvent = getEvents().indexOf(event);
    const date = event.date;
    getEvents().splice(indexOfEvent, 1);
    renderTodayEvents();
    renderTomorrowEvents();
    getCalendarView();
    onDayClick(date);
}