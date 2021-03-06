"use strict";
cc._RF.push(module, 'ffb52VBzPpO5qb7KsEzWPyu', 'resetT10');
// script/resetT10.js

"use strict";

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
        select1: {
            type: cc.Node,
            default: null
        },
        select2: {
            type: cc.Node,
            default: null
        },
        select3: {
            type: cc.Node,
            default: null
        },
        select4: {
            type: cc.Node,
            default: null
        },
        select5: {
            type: cc.Node,
            default: null
        },
        select6: {
            type: cc.Node,
            default: null
        },
        select7: {
            type: cc.Node,
            default: null
        },
        select8: {
            type: cc.Node,
            default: null
        },
        select9: {
            type: cc.Node,
            default: null
        },
        select10: {
            type: cc.Node,
            default: null
        },
        input1: {
            type: cc.EditBox,
            default: null
        },
        input2: {
            type: cc.EditBox,
            default: null
        },
        input3: {
            type: cc.EditBox,
            default: null
        },
        input4: {
            type: cc.EditBox,
            default: null
        },
        input5: {
            type: cc.EditBox,
            default: null
        },
        input6: {
            type: cc.EditBox,
            default: null
        },
        input7: {
            type: cc.EditBox,
            default: null
        },
        input8: {
            type: cc.EditBox,
            default: null
        },
        input9: {
            type: cc.EditBox,
            default: null
        },
        input10: {
            type: cc.EditBox,
            default: null
        }
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

    resetNow: function resetNow() {
        this.input1.string = "";
        this.input2.string = "";
        this.input3.string = "";
        this.input4.string = "";
        this.input5.string = "";
        this.input6.string = "";
        this.input7.string = "";
        this.input8.string = "";
        this.input9.string = "";
        this.input10.string = "";
        this.input1.placeholder = "ID";
        this.input2.placeholder = "ID";
        this.input3.placeholder = "ID";
        this.input4.placeholder = "ID";
        this.input5.placeholder = "ID";
        this.input6.placeholder = "ID";
        this.input7.placeholder = "ID";
        this.input8.placeholder = "ID";
        this.input9.placeholder = "ID";
        this.input10.placeholder = "ID";
        this.select1.children[2].getComponent(cc.Label).string = "??? ???";
        this.select2.children[2].getComponent(cc.Label).string = "??? ???";
        this.select3.children[2].getComponent(cc.Label).string = "??? ???";
        this.select4.children[2].getComponent(cc.Label).string = "??? ???";
        this.select5.children[2].getComponent(cc.Label).string = "??? ???";
        this.select6.children[2].getComponent(cc.Label).string = "??? ???";
        this.select7.children[2].getComponent(cc.Label).string = "??? ???";
        this.select8.children[2].getComponent(cc.Label).string = "??? ???";
        this.select9.children[2].getComponent(cc.Label).string = "??? ???";
        this.select10.children[2].getComponent(cc.Label).string = "??? ???";
        cc.sys.localStorage.setItem('id1', "ID");
        cc.sys.localStorage.setItem('select1', "??? ???");
        cc.sys.localStorage.setItem('id2', "ID");
        cc.sys.localStorage.setItem('select2', "??? ???");
        cc.sys.localStorage.setItem('id3', "ID");
        cc.sys.localStorage.setItem('select3', "??? ???");
        cc.sys.localStorage.setItem('id4', "ID");
        cc.sys.localStorage.setItem('select4', "??? ???");
        cc.sys.localStorage.setItem('id5', "ID");
        cc.sys.localStorage.setItem('select5', "??? ???");
        cc.sys.localStorage.setItem('id6', "ID");
        cc.sys.localStorage.setItem('select6', "??? ???");
        cc.sys.localStorage.setItem('id7', "ID");
        cc.sys.localStorage.setItem('select7', "??? ???");
        cc.sys.localStorage.setItem('id8', "ID");
        cc.sys.localStorage.setItem('select8', "??? ???");
        cc.sys.localStorage.setItem('id9', "ID");
        cc.sys.localStorage.setItem('select9', "??? ???");
        cc.sys.localStorage.setItem('id10', "ID");
        cc.sys.localStorage.setItem('select10', "??? ???");
    },


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();