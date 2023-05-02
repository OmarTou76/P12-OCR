export class AverageSessions {
    _days = ["L", "M", "M", "J", "V", "S", "D"]

    constructor(averageSessions) {
        this.model = {}
        this.createModel(averageSessions)
        return this.model
    }

    createModel(averageSessions) {
        this.model = averageSessions.data.sessions.map(average => ({
            ...average,
            day: this._days[average.day - 1]
        }))
    }
}
