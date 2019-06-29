import {renderEventsForDay} from './view'
import {getEvents} from '../eventForm/model'

describe("view", () => {
    it("should render list of events for specified day", () => {
        //given
        document.body.innerHTML = 
        `           
            <div id="eventList" class="mt-5"></div> 
        `;
        const events = getEvents();

        //when
        renderEventsForDay(events);

        //then
        expect.anything();
    })
})