var Data = (function () {
    function Data() {
    }
    Data.getRectWidth = function () {
        if (Data._rectWidth == 0) {
            Data._rectWidth = egret.MainContext.instance.stage.stageWidth / 4;
        }
        return Data._rectWidth;
    };

    Data.getRectRow = function () {
        if (Data._rectRow == 0) {
            Data._rectRow = Math.ceil(egret.MainContext.instance.stage.stageHeight / Data.getRectWidth()) + 1;
        }
        return Data._rectRow;
    };

    Data.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    Data._rectWidth = 0;

    Data.score = 0;

    Data._rectRow = 0;
    return Data;
})();
