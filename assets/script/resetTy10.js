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
        select1:{
            type:cc.Node,
            default:null,
        },
        select2:{
            type:cc.Node,
            default:null,
        },
        select3:{
            type:cc.Node,
            default:null,
        },
        select4:{
            type:cc.Node,
            default:null,
        },
        select5:{
            type:cc.Node,
            default:null,
        },
        select6:{
            type:cc.Node,
            default:null,
        },
        select7:{
            type:cc.Node,
            default:null,
        },
        select8:{
            type:cc.Node,
            default:null,
        },
        select9:{
            type:cc.Node,
            default:null,
        },
        select10:{
            type:cc.Node,
            default:null,
        },
        select11:{
            type:cc.Node,
            default:null,
        },
        select12:{
            type:cc.Node,
            default:null,
        },
        select13:{
            type:cc.Node,
            default:null,
        },
        select14:{
            type:cc.Node,
            default:null,
        },
        select15:{
            type:cc.Node,
            default:null,
        },
        select16:{
            type:cc.Node,
            default:null,
        },
        select17:{
            type:cc.Node,
            default:null,
        },
        input1:{
            type:cc.EditBox,
            default:null,
        },
        input2:{
            type:cc.EditBox,
            default:null,
        },
        input3:{
            type:cc.EditBox,
            default:null,
        },
        input4:{
            type:cc.EditBox,
            default:null,
        },
        input5:{
            type:cc.EditBox,
            default:null,
        },
        input6:{
            type:cc.EditBox,
            default:null,
        },
        input7:{
            type:cc.EditBox,
            default:null,
        },
        input8:{
            type:cc.EditBox,
            default:null,
        },
        input9:{
            type:cc.EditBox,
            default:null,
        },
        input10:{
            type:cc.EditBox,
            default:null,
        },
        input11:{
            type:cc.EditBox,
            default:null,
        },
        input12:{
            type:cc.EditBox,
            default:null,
        },
        input13:{
            type:cc.EditBox,
            default:null,
        },
        input14:{
            type:cc.EditBox,
            default:null,
        },
        input15:{
            type:cc.EditBox,
            default:null,
        },
        input16:{
            type:cc.EditBox,
            default:null,
        },
        input17:{
            type:cc.EditBox,
            default:null,
        },
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

    resetNow(){
        this.input1.string="";
        this.input2.string="";
        this.input3.string="";
        this.input4.string="";
        this.input5.string="";
        this.input6.string="";
        this.input7.string="";
        this.input8.string="";
        this.input9.string="";
        this.input10.string="";
        this.input11.string="";
        this.input12.string="";
        this.input13.string="";
        this.input14.string="";
        this.input15.string="";
        this.input16.string="";
        this.input17.string="";
        this.input1.placeholder="ID";
        this.input2.placeholder="ID";
        this.input3.placeholder="ID";
        this.input4.placeholder="ID";
        this.input5.placeholder="ID";
        this.input6.placeholder="ID";
        this.input7.placeholder="ID";
        this.input8.placeholder="ID";
        this.input9.placeholder="ID";
        this.input10.placeholder="ID";
        this.input11.placeholder="ID";
        this.input12.placeholder="ID";
        this.input13.placeholder="ID";
        this.input14.placeholder="ID";
        this.input15.placeholder="ID";
        this.input16.placeholder="ID";
        this.input17.placeholder="ID";
        this.select1.children[2].getComponent(cc.Label).string="职 业";
        this.select2.children[2].getComponent(cc.Label).string="职 业";
        this.select3.children[2].getComponent(cc.Label).string="职 业";
        this.select4.children[2].getComponent(cc.Label).string="职 业";
        this.select5.children[2].getComponent(cc.Label).string="职 业";
        this.select6.children[2].getComponent(cc.Label).string="职 业";
        this.select7.children[2].getComponent(cc.Label).string="职 业";
        this.select8.children[2].getComponent(cc.Label).string="职 业";
        this.select9.children[2].getComponent(cc.Label).string="职 业";
        this.select10.children[2].getComponent(cc.Label).string="职 业";
        this.select11.children[2].getComponent(cc.Label).string="职 业";
        this.select12.children[2].getComponent(cc.Label).string="职 业";
        this.select13.children[2].getComponent(cc.Label).string="职 业";
        this.select14.children[2].getComponent(cc.Label).string="职 业";
        this.select15.children[2].getComponent(cc.Label).string="职 业";
        this.select16.children[2].getComponent(cc.Label).string="职 业";
        this.select17.children[2].getComponent(cc.Label).string="职 业";
        cc.sys.localStorage.setItem('mid1',"ID");
        cc.sys.localStorage.setItem('mselect1',"职 业");
        cc.sys.localStorage.setItem('mid2',"ID");
        cc.sys.localStorage.setItem('mselect2',"职 业");
        cc.sys.localStorage.setItem('mid3',"ID");
        cc.sys.localStorage.setItem('mselect3',"职 业");
        cc.sys.localStorage.setItem('mid4',"ID");
        cc.sys.localStorage.setItem('mselect4',"职 业");
        cc.sys.localStorage.setItem('mid5',"ID");
        cc.sys.localStorage.setItem('mselect5',"职 业");
        cc.sys.localStorage.setItem('mid6',"ID");
        cc.sys.localStorage.setItem('mselect6',"职 业");
        cc.sys.localStorage.setItem('mid7',"ID");
        cc.sys.localStorage.setItem('mselect7',"职 业");
        cc.sys.localStorage.setItem('mid8',"ID");
        cc.sys.localStorage.setItem('mselect8',"职 业");
        cc.sys.localStorage.setItem('mid9',"ID");
        cc.sys.localStorage.setItem('mselect9',"职 业");
        cc.sys.localStorage.setItem('mid10',"ID");
        cc.sys.localStorage.setItem('mselect10',"职 业");
        cc.sys.localStorage.setItem('mid11',"ID");
        cc.sys.localStorage.setItem('mselect11',"职 业");
        cc.sys.localStorage.setItem('mid12',"ID");
        cc.sys.localStorage.setItem('mselect12',"职 业");
        cc.sys.localStorage.setItem('mid13',"ID");
        cc.sys.localStorage.setItem('mselect13',"职 业");
        cc.sys.localStorage.setItem('mid14',"ID");
        cc.sys.localStorage.setItem('mselect14',"职 业");
        cc.sys.localStorage.setItem('mid15',"ID");
        cc.sys.localStorage.setItem('mselect15',"职 业");
        cc.sys.localStorage.setItem('mid16',"ID");
        cc.sys.localStorage.setItem('mselect16',"职 业");
        cc.sys.localStorage.setItem('mid17',"ID");
        cc.sys.localStorage.setItem('mselect17',"职 业");
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
