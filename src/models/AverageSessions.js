export class AverageSessions {
    constructor(averageSessions) {
        this.model = {}
        this.createModel(averageSessions)
        return this.model
    }

    createModel(averageSessions) {
        this.model = {
            sessions: averageSessions.sessions
        }
    }
}
