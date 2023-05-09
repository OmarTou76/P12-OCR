import { KeyData } from "./KeyData";

export class User {
    id;
    firstName;
    lastName;
    age;
    score;
    keyData;

    constructor(userData) {
        this.id = userData.id;
        this.firstName = userData.userInfos.firstName;
        this.lastName = userData.userInfos.lastName;
        this.age = userData.userInfos.age;
        this.keyData = []
        for (const key in userData.keyData) {
            if (userData.keyData[key]) {
                this.keyData.push(new KeyData(key, userData.keyData[key]))
            }
        }
        this.score = (userData.todayScore || userData.score) * 100
        this.scoresData = [
            { score: this.score },
            { score: 100 - this.score }
        ]
    }


}
