export class Activity {
    constructor(activity) {
        this.model = {}
        this.createModel(activity)
        return this.model
    }

    createModel(activity) {

        this.model = activity.data.sessions.map((activity, index) => ({
            ...activity,
            index: index + 1
        }))
    }
}
