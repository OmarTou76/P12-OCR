export class Performance {
    constructor(performanceData) {
        this.model = {}
        this.createModel(performanceData)
        return this.model
    }

    createModel(performanceData) {
        this.model = {
            kind: performanceData.kind,
            data: performanceData.data
        }
    }
}
