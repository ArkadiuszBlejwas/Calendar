import { removeEvent } from "./controller"

export const renderEventsForDay = (events) => {

    const eventListNode = document.querySelector('#eventList');
    eventListNode.innerHTML = "";
    
    const table = document.createElement("table");
    table.className = (events.length === 0) ? 'is-hidden': 'tableOfEvents table table-hover'
    
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    const thTitle = document.createElement("th");
    thTitle.scope = "col";
    thTitle.innerText = "Title";

    const thDate = document.createElement("th");
    thDate.scope = "col";
    thDate.innerText = "Date";

    const thPlace = document.createElement("th");
    thPlace.scope = "col";
    thPlace.innerText = "Place";

    const thDescription = document.createElement("th");
    thDescription.scope = "col";
    thDescription.innerText = "Description";

    const thParticipants = document.createElement("th");
    thParticipants.scope = "col";
    thParticipants.innerText = "Participants";

    const thEmpty = document.createElement("th");
    thEmpty.scope = "col";

    tr.appendChild(thTitle);
    tr.appendChild(thDate);
    tr.appendChild(thPlace);
    tr.appendChild(thDescription);
    tr.appendChild(thParticipants);
    tr.appendChild(thEmpty);

    thead.appendChild(tr);
    table.appendChild(thead);

    for (let event of events){
        const trProper = document.createElement("tr");

        const tdTitle = document.createElement("td");
        tdTitle.innerText = event.title;

        const tdDate = document.createElement("td");
        tdDate.innerText = event.date;

        const tdPlace = document.createElement("td");
        tdPlace.innerText = event.place;

        const tdDescription = document.createElement("td");
        tdDescription.innerText = event.description;

        const tdParticipants = document.createElement("td");
        tdParticipants.innerText = event.participants;

        let deleteEvent = document.createElement("button");
        deleteEvent.innerText = "delete";
        deleteEvent.className = "removeButton text-center btn btn-outline-primary";

        deleteEvent.onclick = () => {
            removeEvent(event);
        }

        trProper.appendChild(tdTitle);
        trProper.appendChild(tdDate);
        trProper.appendChild(tdPlace);
        trProper.appendChild(tdDescription);
        trProper.appendChild(tdParticipants);
        trProper.appendChild(deleteEvent);

        table.appendChild(trProper);
    }
    eventListNode.appendChild(table);
}