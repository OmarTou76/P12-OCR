export class User {
    constructor(userData) {
        this.model = {}
        this.createModel(userData)
        return this.model
    }

    createModel(userData) {
        this.model = {
            id: userData.id,
            firstName: userData.userInfos.firstName,
            lastName: userData.userInfos.lastName,
            age: userData.userInfos.age,
            score: userData.todayScore || userData.score,
            keyData: userData.keyData
        }
    }
}
