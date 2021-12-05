// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        triangle: cc.Node,          // 下拉按钮右边的小三角形
        comboLabel: cc.Label,       // 下拉按钮上显示的文本
        dropDown: cc.Node,          // 下拉框
        vLayoutNode: cc.Node,       // 垂直布局
        contentNode: cc.Node,       // 滚动视图内容
        itemPrefab: cc.Prefab       // 下拉框选项
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.isDropDown = false;
        // 下拉框选项内容
        this.itemArray = ['大 师','喵 T', '策 T', '盾 T'];
        this.initItems();
    },
    rotateTriangle () {
        // 旋转小三角形(正值为逆时针，负值为顺时针)
        if (!this.isDropDown) {
            this.triangle.runAction(cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut()));
        }
        else {
            this.triangle.runAction(cc.rotateTo(0.5, 0).easing(cc.easeCubicActionOut()));
        }
    },
    showHideDropDownBox () {
        // 下拉框显示与隐藏
        if (!this.isDropDown) 
            this.dropDown.active = true;
        else 
            this.dropDown.active = false;
    },
    comboboxClicked () {
        // 旋转小三角形
        this.rotateTriangle();
        // 下拉框显示与隐藏
        this.showHideDropDownBox();
        // 改变isDropDown值
        if (!this.isDropDown)
            this.isDropDown = true;
        else 
            this.isDropDown = false;
    },
    initItems () {
        // 根据数组初始化下拉框中的各个选项内容
        let totalHeight = 0;
        for (let i=0; i<this.itemArray.length; i++) {
            let item = cc.instantiate(this.itemPrefab);
            item.children[1].getComponent(cc.Label).string = this.itemArray[i];
            item.getComponent('Item').initComboBox(this);
            this.vLayoutNode.addChild(item);
            totalHeight += item.height;
        }
     
        // 设置content高度
        if (totalHeight > this.contentNode.height) 
            this.contentNode.height = totalHeight;
    },
    start () {

    },

    // update (dt) {},
});
