import {removeEvent, renderEvents} from './controller'
import {getEvents} from '../eventForm/model'

describe("constroller which has removeEvent method", () => {
    it("should remove one event from storage", () => {
        //given
        document.body.innerHTML = 
        `           
            <div id="eventList" class="mt-5"></div> 
            <div id="todayEvents" class="mt-5"></div>
            <div id="tomorrowEvents" class="mt-5"></div>  
            <div id="calendarDays"></div>     
            <h3 class="col-12 text-center" id="currentMonthAndYear"></h3>   
            <button class="btn btn-outline-primary col-sm-3" id="prev" type="button">Previous</button> 
            <button class="btn btn-outline-primary col-sm-3" id="next" type="button">Next</button>
        `;

        let event = {
            title : "Grill",
            date: "2019-05-25",
            place: "działka",
            description: "grill z rodzinką",
            participants: "rodzinka, znajomi"
        };

        let events = [
            {
                title : "zajęcia lekcyjne",
                date: "2019-06-01",
                place: "szkoła",
                description: "matematyka, fizyka, polski",
                participants: "uczniowie"
            },
            {
                title : "wypoczynek",
                date: "2019-06-03",
                place: "dom",
                description: "odpoczywanie po pracy",
                participants: "nikt"
            },
            {
                title : "mecz piłki nożnej",
                date: "2019-06-04",
                place: "boisko",
                description: "rozgrywka między kumplami",
                participants: "kumple"
            },
            {
                title : "obiad",
                date: "2019-06-05",
                place: "dom",
                description: "obiad z rodzinką",
                participants: "rodzinka"
            }
        ]

        //when
        removeEvent(event);
        const eventsAfterRemove = getEvents();

        //then
        expect(events.length).toBe(eventsAfterRemove.length);
    })

    it("should render list of events for specified day", () => {
        //given
        document.body.innerHTML = 
        `           
            <div id="eventList" class="mt-5"></div> 
        `;
        const dateOfFirstEvent = getEvents()[0].date;

        //when
        renderEvents(dateOfFirstEvent);

        //then
        expect.anything();
    })
})