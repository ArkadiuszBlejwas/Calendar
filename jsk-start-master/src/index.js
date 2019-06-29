import "./style.css"
import {getCalendarView} from "./app/calendar/controller"
import {getActualDate} from "./app/header/view"
import {getEventFormView} from  "./app/eventForm/controller"
import {renderTodayEvents, renderTomorrowEvents} from "./app/upComingEvents/controller"


const render = () => {
    getActualDate();
    getCalendarView();
    getEventFormView();
    renderTodayEvents();
    renderTomorrowEvents();
}

render();