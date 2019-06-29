import {generateViewCalendar,
        getButtons, 
        generateWeekDiv, 
        generateDayDiv, 
        changeBorderColorForActualDay,
        getCurrentDateInCorrectFormat, 
        generateNumberOfEventsForDay,
        setOnCalendarSpecifiedMonthAndYear} from './view'

describe("view of calendar", () => {
    it("should generate view of calendar", () => {
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
        const currentYear = 2019;
        const currentMonth = 5;

        //when
        generateViewCalendar(currentYear, currentMonth);

        //then
        expect.anything();
    })

    it("should get Listeners for buttons next and prev", () => {
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
        const currentYear = 2019;
        const currentMonth = 5;

        //when
        const result = getButtons(currentYear, currentMonth);

        //then
        expect(result).toBeTruthy();
    })

    it("should generate week div", () => {
        //given
        const weekDiv = document.createElement("div");
        weekDiv.className = "week row";

        //when
        const result = generateWeekDiv();

        //then
        expect(result).toEqual(weekDiv);
    })

    it("should generate day div", () => {
        //given
        const day = 30;
        let dayDiv = document.createElement("div");
        dayDiv.innerText = day > 0 ? day : '';
        dayDiv.className = day > 0 ? "day col text-center btn btn-outline-primary" : "emptyDay col btn btn-outline-primary inactive-button";

        //when
        const result = generateDayDiv(day);

        //then
        expect(result).toEqual(dayDiv);
    })

    it("should generate day div", () => {
        //given
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const day = today.getDate();
        const dateInCorrectFormat = currentYear + "-" + (currentMonth > 9 ? "" : "0") + (currentMonth + 1) + "-" + (day > 9 ? "" : "0") + day;        
        
        //when
        const date = getCurrentDateInCorrectFormat(currentYear, currentMonth, day);

        //then
        expect(date).toEqual(dateInCorrectFormat);
    })

    it("should generate number of events for day", () => {
        //given
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const day = today.getDate();
        const currentDate = currentYear + "-" + (currentMonth > 9 ? "" : "0") + (currentMonth + 1) + "-" + (day > 9 ? "" : "0") + day;        
        const dayDiv = generateDayDiv(day);
        
        //when
        generateNumberOfEventsForDay(dayDiv, currentDate);

        //then
        expect.anything();
    })

    it("should change border color for present day", () => {
        //given
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const day = today.getDate();
        const currentDate = currentYear + "-" + (currentMonth > 9 ? "" : "0") + (currentMonth + 1) + "-" + (day > 9 ? "" : "0") + day;        
        const dayDiv = generateDayDiv(day);
        
        //when
        changeBorderColorForActualDay(dayDiv, day, today, currentMonth, currentYear);

        //then
        expect.anything();
    })

    it("should set on calendar specified month and year", () => {
        //given
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();

        document.body.innerHTML = 
        `           
            <h3 class="col-12 text-center" id="currentMonthAndYear"></h3> 
        `;
        
        //when
        setOnCalendarSpecifiedMonthAndYear(currentYear, currentMonth);

        //then
        expect.anything();
    })
})