cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        pic:{
            default:null,
            type:cc.Node
        },
        mvPic:{
            default:null,
            type:cc.Node
        },
        posFrame:{
            default:null,
            type:cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
    var oX = this.posFrame.x
    var oY = this.posFrame.y
    var oWid = this.posFrame.width
    var oHeight = this.posFrame.height
    var node = this
    var listener = {
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        onTouchBegan: function (touches, event) {
            cc.log('Touch Began: ' + event);
            //for(var i in event)
            //    cc.log(i)
                //var touch = node.convertTouchToNodeSpace(cc.Vec2(touches.getLocationX(),touches.getLocationY()))
            
            var x = touches.getLocationX()
            var y = touches.getLocationY()
            cc.log(x,y);
            cc.log(oX,oY,oWid,oHeight);
            if(x<oX+oWid/2&&x>oX-oWid/2&&y<oY+oHeight/2&&y>oY-oHeight/2){
                return true;
            }
            
            return false    ; //这里必须要写 return true
        },
        onTouchMoved: function (touches, event) {
            cc.log('Touch Moved: ' + event);
            var delta = touches.getDelta()
            var x = delta.x;
            var y = delta.y;
            cc.log(node)
            node.pic.x +=x;
            node.pic.y +=y;
            node.mvPic.x +=x;
            node.mvPic.y +=y;
           cc.log("Delta:",touches.getDelta())
        },
        onTouchEnded: function (touches, event) {
           cc.log('Touch Ended: ' + event);
        },
        onTouchCancelled: function (touches, event) {
           cc.log('Touch Cancelled: ' + event);
        }
    }
    // 绑定单点触摸事件
    cc.eventManager.addListener(listener, this.node);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
