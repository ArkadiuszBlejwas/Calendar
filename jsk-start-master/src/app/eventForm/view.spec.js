import { isFormInvalid, saveEvent } from "./view"

describe("view of form", () => {
    it("should return true when 3 input fields in form is empty", () => {
        //given
        document.body.innerHTML = `           
              <input name="titleField" class="form-control" id="titleForm" type="text" placeholder="Type title of event..." required>
       
              <input name="dateField" class="form-control" id="dateForm" type="date" required>

              <input name="placeField" class="form-control" id="placeForm" type="text" placeholder="Type place of event..." required>            
        `;

        //when
        const result = isFormInvalid();

        //then
        expect(result).toBeTruthy();
    })

    it("should return true when 2 input fields in form is empty", () => {
        //given
        document.body.innerHTML = `           
              <input name="titleField" class="form-control" id="titleForm" type="text" placeholder="Type title of event..." required>
       
              <input name="dateField" class="form-control" id="dateForm" type="date" required>

              <input name="placeField" class="form-control" id="placeForm" type="text" placeholder="Type place of event..." required>            
        `;
        document.getElementById("titleForm").value = "Grill";

        //when
        const result = isFormInvalid();

        //then
        expect(result).toBeTruthy();
    })

    it("should return true when 1 input fields in form is empty", () => {
        //given
        document.body.innerHTML = `           
              <input name="titleField" class="form-control" id="titleForm" type="text" placeholder="Type title of event..." required>
       
              <input name="dateField" class="form-control" id="dateForm" type="date" required>

              <input name="placeField" class="form-control" id="placeForm" type="text" placeholder="Type place of event..." required>            
        `;
        document.getElementById("titleForm").value = "Grill";
        document.getElementById("dateForm").value = "2019-06-03";

        //when
        const result = isFormInvalid();

        //then
        expect(result).toBeTruthy();
    })

    it("should return false when 3 input fields in form is completed", () => {
        //given
        document.body.innerHTML = `           
              <input name="titleField" class="form-control" id="titleForm" type="text" placeholder="Type title of event..." required>
       
              <input name="dateField" class="form-control" id="dateForm" type="date" required>

              <input name="placeField" class="form-control" id="placeForm" type="text" placeholder="Type place of event..." required>            
        `;
        document.getElementById("titleForm").value = "Grill";
        document.getElementById("dateForm").value = "2019-06-03";
        document.getElementById("placeForm").value = "Działka";

        //when
        const result = isFormInvalid();

        //then
        expect(result).toBeFalsy();
    })
})