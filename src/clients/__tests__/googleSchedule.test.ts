import { GoogleSchedule } from '@src/clients/GoogleSchedule';
import axios from "axios";
import appointmentGoogle from "@test/fixtures/appointmentGoogle.json";
import appointmentNormalized from "@test/fixtures/appointmentNormalized.json";

jest.mock('axios');

describe("Stormglass tests", () => {
    it("Normalize appointments", async () => {
        const initDate = "15/04/2021";
        const endDate = "12/12/2021";
        axios.get = jest.fn().mockResolvedValue(appointmentGoogle);
        const googleSchedule = new GoogleSchedule(axios);
        const response = await googleSchedule.fetchPoints(initDate, endDate);
        expect(response).toEqual(appointmentNormalized);

    })
})