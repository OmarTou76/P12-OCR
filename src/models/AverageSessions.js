export class AverageSessions {
    _days = ["L", "M", "M", "J", "V", "S", "D"]
    data;
    constructor(averageSessions) {
        this.data = averageSessions.data.sessions.map(average => ({
            ...average,
            day: this._days[average.day - 1]
        }))
    }
}
