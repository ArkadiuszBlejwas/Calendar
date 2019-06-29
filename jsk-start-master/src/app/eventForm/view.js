import {getEvents} from "./model"
import {getCalendarView} from "../calendar/controller"
import {renderTodayEvents, renderTomorrowEvents} from "../upComingEvents/controller"

const selectors = {
    title: 'titleForm',
    date: 'dateForm',
    place: 'placeForm',
}

export const isFormInvalid = () => {
    const title = document.getElementById(selectors.title);
    const date = document.getElementById(selectors.date);
    const place = document.getElementById(selectors.place);

    const isTitleInvalid = title.value.length === 0;
    const isDateInvalid = date.value.length === 0;
    const isPlaceInvalid = place.value.length === 0;

    isTitleInvalid
        ? title.classList.add('is-invalid')
        : title.classList.remove('is-invalid');

    isDateInvalid
        ? date.classList.add('is-invalid')
        : date.classList.remove('is-invalid');
    isPlaceInvalid
        ? place.classList.add('is-invalid')
        : place.classList.remove('is-invalid');

    return isTitleInvalid || isDateInvalid || isPlaceInvalid;
}

export const saveEvent = () => {
    const title = document.forms["eventForm"]["titleField"].value;
    const date = document.forms["eventForm"]["dateField"].value;
    const place = document.forms["eventForm"]["placeField"].value;
    const description = document.forms["eventForm"]["descriptionField"].value;
    const paricipants = document.forms["eventForm"]["participantsField"].value;

    const event = {
        title : title,
        date: date,
        place: place,
        description: description,
        participants: paricipants
    }
    getEvents().push(event);
}

export const addEventButtonListener = () => {
    const addEventButton = document.querySelector("#addEvent");
    addEventButton.addEventListener("click", function(e) {
        e.preventDefault();
        if (!isFormInvalid()) {
            saveEvent();
            document.getElementById("eventForm").reset();
            getCalendarView();
            renderTodayEvents();
            renderTomorrowEvents();
        }
    });
}