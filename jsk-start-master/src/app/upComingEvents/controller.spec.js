import {renderTodayEvents, renderTomorrowEvents} from './controller'

describe("controller of upcoming events", () => {
    it("should filter days in order to render events for present day", () => {
        //given
        document.body.innerHTML = 
        `           
            <div id="todayEvents" class="mt-5"></div>
            <div id="tomorrowEvents" class="mt-5"></div>
        `;

        //when
        renderTodayEvents();

        //then
        expect.anything();
    })

    it("should filter days in order to render events for tomorrow", () => {
        //given
        document.body.innerHTML = 
        `           
            <div id="todayEvents" class="mt-5"></div>
            <div id="tomorrowEvents" class="mt-5"></div>
        `;

        //when
        renderTomorrowEvents();

        //then
        expect.anything();
    })
})