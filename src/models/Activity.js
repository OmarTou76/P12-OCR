export class Activity {
    data;
    constructor(activity) {
        this.data = activity.data.sessions.map((userData) => ({
            ...userData,
            day: new Date(userData.day).getDay()
        }))
    }
}
