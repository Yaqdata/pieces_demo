var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        _super.call(this);
        this._colors = [0x000000, 0xffffff, 0xff0000, 0x0000ff];
        this._currentColor = 1;
        this._type = RectType.NONCLICKABLE;
        this.touchEnabled = true;
        this.draw();
    }
    Rect.prototype.draw = function () {
        this.width = Data.getRectWidth();
        this.height = Data.getRectWidth();
        this.graphics.lineStyle(1, 0x000000);
        this.graphics.beginFill(this._colors[this._currentColor]);
        this.graphics.drawRect(0, 0, 100, 100);
        this.graphics.endFill();
    };

    Object.defineProperty(Rect.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
            if (this._type == RectType.CLICKABLE) {
                if (this._type == RectType.CLICKABLE) {
                    this._currentColor = 0;
                } else {
                    this._currentColor = 1;
                }
                this.draw();
            }
        },
        enumerable: true,
        configurable: true
    });

    Rect.prototype.onRectClick = function () {
        if (this._type == RectType.CLICKABLE) {
            this._currentColor = 3;
        } else {
            this._currentColor = 2;
        }
        this.draw();
    };
    return Rect;
})(egret.Sprite);
