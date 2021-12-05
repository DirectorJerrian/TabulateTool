"use strict";
cc._RF.push(module, '6b809s7BvJF1oZNzzOmZQb3', 'IET25_25');
// script/团队25人/IET25_25.js

'use strict';

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
        self: {
            type: cc.Node,
            default: null
        },
        select: {
            type: cc.Node,
            default: null
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
        } },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var temp1 = cc.sys.localStorage.getItem('nid25'); //读取数据
        if (temp1 != null) {
            this.self.children[2].getComponent(cc.Label).string = temp1;
        }
        var temp2 = cc.sys.localStorage.getItem('nselect25'); //读取数据
        if (temp2 != null) {
            this.select.children[2].getComponent(cc.Label).string = temp2;
        }
    },
    start: function start() {},
    inputEnd: function inputEnd() {
        cc.sys.localStorage.setItem('nid25', this.self.children[1].getComponent(cc.Label).string);
        cc.sys.localStorage.setItem('nselect25', this.select.children[2].getComponent(cc.Label).string);
    }
}
// update (dt) {},
);

cc._RF.pop();