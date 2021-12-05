"use strict";
cc._RF.push(module, 'bdcebW1MWxE9pHFMZrdeifq', 'team10');
// script/team10.js

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

    toTeam25: function toTeam25() {
        this.node.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc(function () {
            cc.director.loadScene('团队25人');
        })));
    },

    toType10: function toType10() {
        this.node.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc(function () {
            cc.director.loadScene('类型10人');
        })));
    },

    toRankingList: function toRankingList() {
        this.node.runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(function () {
            cc.director.loadScene('光荣榜');
        })));
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();