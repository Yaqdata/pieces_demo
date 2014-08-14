var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);

        //var rect = new Rect();
        //this.addChild(rect);
        //rect.type = RectType.NONCLICKABLE;
        //rect.onRectClick();
        var group = new GroupRect();
        this.addChild(group);
    }
    return Main;
})(egret.DisplayObjectContainer);
