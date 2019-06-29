import {renderEventsForToday, renderEventsForTomorrow} from './view'
import {getEvents} from "../eventForm/model"

describe("controller of upcoming events", () => {
    it("should render list of events for present day", () => {
        //given
        document.body.innerHTML = 
        `           
            <div id="todayEvents" class="mt-5"></div>
            <div id="tomorrowEvents" class="mt-5"></div>
        `;
        const events= getEvents();

        //when
        renderEventsForToday(events);

        //then
        expect.anything();
    })

    it("should render list of events for tomorrow", () => {
        //given
        document.body.innerHTML = 
        `           
            <div id="todayEvents" class="mt-5"></div>
            <div id="tomorrowEvents" class="mt-5"></div>
        `;
        const events= getEvents();

        //when
        renderEventsForTomorrow(events);

        //then
        expect.anything();
    })
})