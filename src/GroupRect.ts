class GroupRect extends egret.Sprite
{
    public constructor()
    {
        super();
        this.createRects();
    }

    private _rects: Array<Rect>;
    private createRects()
    {
        this._rects= [];
        for (var i=0; i<4; i++)
        {
            var rect:Rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width * i;
            this.addChild(rect);
        }
    }
}
