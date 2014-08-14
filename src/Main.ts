class Main extends egret.DisplayObjectContainer
{
    public constructor()
    {
        super();

        //var rect = new Rect();
        //this.addChild(rect);
        //rect.type = RectType.NONCLICKABLE;
        //rect.onRectClick();
        var group: GroupRect = new GroupRect();
        this.addChild(group);
    }
}
