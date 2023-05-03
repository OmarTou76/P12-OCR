export class User {
    model = {}
    score = {}
    constructor(userData) {
        this.createModel(userData)
    }

    createModel(userData) {
        const score = userData.todayScore || userData.score
        this.model = {
            id: userData.id,
            firstName: userData.userInfos.firstName,
            lastName: userData.userInfos.lastName,
            age: userData.userInfos.age,
            score: score * 100,
            keyData: userData.keyData
        }
        this.score = [
            {
                score: this.model.score,
            },
            {
                score: Math.abs(this.model.score - 100) // rest of percent
            },
        ]
    }

}
