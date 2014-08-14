var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GroupRect = (function (_super) {
    __extends(GroupRect, _super);
    function GroupRect() {
        _super.call(this);
        this.createRects();
    }
    GroupRect.prototype.createRects = function () {
        this._rects = [];
        for (var i = 0; i < 4; i++) {
            var rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width * i;
            this.addChild(rect);
        }
    };
    return GroupRect;
})(egret.Sprite);
