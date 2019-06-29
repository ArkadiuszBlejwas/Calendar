import {calendar} from './model'

describe("model of calendar", () => {
    it("should get calendar object", () => {
        //when
        const result = calendar;

        //then
        expect(result).toBeTruthy();
    })
})