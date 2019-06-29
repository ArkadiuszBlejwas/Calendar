import {getEvents} from './model'

describe("model, which is storage", () => {
    it("should return initial events", () => {
        //given
        let expectedEvents = [
            {
                title : "Grill",
                date: "2019-05-25",
                place: "działka",
                description: "grill z rodzinką",
                participants: "rodzinka, znajomi"
            },
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
        const events = getEvents();

        //then
        expect(events).toEqual(expectedEvents);
    })
})