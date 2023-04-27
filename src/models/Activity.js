export class Activity {
    constructor(activity) {
        this.model = {}
        this.createModel(activity)
        return this.model
    }

    createModel(activity) {
        this.model = {
            sessions: activity.sessions,
        }
    }
}
