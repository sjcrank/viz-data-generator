import { action } from 'mobx';
import ViewStore from './viewStore';
import AppStore from './appStore';

const trigFunctions = {
    sin(n) { return Math.sin(n); },
    cos(n) { return Math.cos(n); },
    tan(n) { return Math.tan(n); },
    asin(n) { return Math.asin(n); },
    acos(n) { return Math.acos(n); },
    atan(n) { return Math.atan(n); },
};

const GenDataAction = {
    @action exec() {
        ViewStore.configIsDirty = false;
        const cfg = AppStore.configSpec;

        const xData = Array.from(new Array(cfg.xDataPts).keys()).map((x) => {
            if(cfg.xDataShape === 'linear') {
                return cfg.xLinearVar1 * x + cfg.xLinearVar2;
            } else if(cfg.xDataShape === 'trigonometric') {
                return cfg.xTrigVar1 * trigFunctions[cfg.xTrigType](cfg.xTrigVar2 * x) + cfg.xTrigVar3;
            } else {
                return x;
            }
        });

        const yData = Array.from(new Array(cfg.yDataPts).keys()).map((y) => {
            if(cfg.yDataShape === 'linear') {
                return cfg.yLinearVar1 * y + cfg.yLinearVar2;
            } else if(cfg.yDataShape === 'trigonometric') {
                return cfg.yTrigVar1 * trigFunctions[cfg.yTrigType](cfg.yTrigVar2 * y) + cfg.yTrigVar3;
            } else {
                return y;
            }
        });

        AppStore.generatedData = yData.map(y => xData.map(x => x + y));
    },
};

export default GenDataAction;
