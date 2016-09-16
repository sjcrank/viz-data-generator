import { observable, computed } from 'mobx';

function isNumeric(n) {
    const f = parseFloat(n);
    return !Number.isNaN(f) && Number.isFinite(f);
}

function isIntegral(n) {
    const f = parseFloat(n);
    return !Number.isNaN(f) && Number.isFinite(f) && f % 1 === 0;
}

const AppStore = {
    // generated data

    // config spec
    configSpec: {
        @observable xDataPts: 100,
        @observable xDataShape: 'linear',
        @observable xLinearVar1: 1,
        @observable xLinearVar2: 0,
        @observable xTrigType: 'sin',
        @observable xTrigVar1: 1,
        @observable xTrigVar2: 1,
        @observable xTrigVar3: 0,

        @observable yDataPts: 1,
        @observable yDataShape: 'linear',
        @observable yLinearVar1: 1,
        @observable yLinearVar2: 0,
        @observable yTrigType: 'sin',
        @observable yTrigVar1: 1,
        @observable yTrigVar2: 1,
        @observable yTrigVar3: 0,

        @computed get validationMsg() {
            if(!(isIntegral(this.xDataPts) && this.xDataPts >= 1 && this.xDataPts < 10000)) {
                return 'X data points must be a number between 1 and 9,999';
            }
            if(this.xDataShape === 'linear' && (!isNumeric(this.xLinearVar1) || !isNumeric(this.xLinearVar2))) {
                return 'X formula must contain numeric values';
            }
            if(this.xDataShape === 'trigonometric' && (!isNumeric(this.xTrigVar1) || !isNumeric(this.xTrigVar2) || !isNumeric(this.xTrigVar3))) {
                return 'X formula must contain numeric values';
            }
            if(!(isIntegral(this.yDataPts) && this.yDataPts >= 1 && this.yDataPts < 10000)) {
                return 'Y data points must be a number between 1 and 9,999';
            }
            if(this.yDataShape === 'linear' && (!isNumeric(this.yLinearVar1) || !isNumeric(this.yLinearVar2))) {
                return 'Y formula must contain numeric values';
            }
            if(this.yDataShape === 'trigonometric' && (!isNumeric(this.yTrigVar1) || !isNumeric(this.yTrigVar2) || !isNumeric(this.yTrigVar3))) {
                return 'Y formula must contain numeric values';
            }
            return '';
        },

        @computed get isValid() {
            return this.validationMsg === '';
        },
    },
};

export default AppStore;
