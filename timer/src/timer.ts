export class Timer {

    private interval

    constructor(private ms = 1000) {
        this.interval = setInterval(() => {

        }, ms)
    }

    onTick(cb) {
    }
}
