export class KeyData {
    value;
    key;
    label;
    unit;
    backgroundColorIcon;
    constructor(key, value) {
        this.key = key
        this.value = value
        this.setLabel()
    }

    setLabel() {
        switch (this.key) {
            case 'calorieCount':
                this.unit = 'kCal'
                this.label = "Calories"
                this.backgroundColorIcon = "#FF000011"
                break;
            case 'proteinCount':
                this.unit = 'g'
                this.label = "Proteines"
                this.backgroundColorIcon = "#4AB8FF11"
                break;
            case 'carbohydrateCount':
                this.unit = 'g'
                this.label = "Glucides"
                this.backgroundColorIcon = "#FDCC0C11"
                break;
            case 'lipidCount':
                this.unit = 'g'
                this.backgroundColorIcon = "#FD518111"
                this.label = "Lipides"
                break;
            default:
                this.unit = ''
                this.label = "Error"
                this.backgroundColorIcon = "red"
                break;
        }
    }
}