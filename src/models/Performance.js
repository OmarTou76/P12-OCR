export class Performance {
    data;

    _kindCategoryFR = {
        1: 'Cardio',
        2: "Energie",
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'intensité'
    }

    constructor(performanceData) {
        this.data = performanceData.data.map(data => ({
            ...data,
            kind: this._kindCategoryFR[data.kind]
        }))
    }
}
