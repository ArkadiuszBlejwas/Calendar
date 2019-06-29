import { renderEventsForToday, renderEventsForTomorrow } from './view'
import { getEvents } from "../eventForm/model"

export const renderTodayEvents = () => {
    const today = new Date().toJSON().slice(0,10);
    const dayEvents = getEvents().filter(event => event.date === today)
    renderEventsForToday(dayEvents);
}

export const renderTomorrowEvents = () => {
    const tomorrowDay = (new Date().getDate() + 1);
    const tomorrow = new Date().toJSON().slice(0,8) + (tomorrowDay > 9 ? "": "0") + tomorrowDay;
    const dayEvents = getEvents().filter(event => event.date === tomorrow)
    renderEventsForTomorrow(dayEvents);
}
