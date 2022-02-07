import {Timer} from "./timer";

describe("Timer", () => {
    it("should create a timer instance", () => {
        const timer = new Timer()
        expect(timer).toBeTruthy()
    })
})
