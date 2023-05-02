export class Performance {

    _kindCategory = {
        1: 'Cardio',
        2: "Energie",
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'intensité'
    }

    constructor(performanceData) {
        this.model = {}
        this.createModel(performanceData)
        return this.model
    }

    createModel(performanceData) {
        this.model = performanceData.data.data.map(data => ({
            ...data,
            kind: this._kindCategory[data.kind]
        }))

    }
}
