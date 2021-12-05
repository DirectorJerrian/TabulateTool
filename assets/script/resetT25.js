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
        select18:{
            type:cc.Node,
            default:null,
        },
        select19:{
            type:cc.Node,
            default:null,
        },
        select20:{
            type:cc.Node,
            default:null,
        },
        select21:{
            type:cc.Node,
            default:null,
        },
        select22:{
            type:cc.Node,
            default:null,
        },
        select23:{
            type:cc.Node,
            default:null,
        },
        select24:{
            type:cc.Node,
            default:null,
        },
        select25:{
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
        input18:{
            type:cc.EditBox,
            default:null,
        },
        input19:{
            type:cc.EditBox,
            default:null,
        },
        input20:{
            type:cc.EditBox,
            default:null,
        },
        input21:{
            type:cc.EditBox,
            default:null,
        },
        input22:{
            type:cc.EditBox,
            default:null,
        },
        input23:{
            type:cc.EditBox,
            default:null,
        },
        input24:{
            type:cc.EditBox,
            default:null,
        },
        input25:{
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
        this.input18.string="";
        this.input19.string="";
        this.input20.string="";
        this.input21.string="";
        this.input22.string="";
        this.input23.string="";
        this.input24.string="";
        this.input25.string="";
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
        this.input18.placeholder="ID";
        this.input19.placeholder="ID";
        this.input20.placeholder="ID";
        this.input21.placeholder="ID";
        this.input22.placeholder="ID";
        this.input23.placeholder="ID";
        this.input24.placeholder="ID";
        this.input25.placeholder="ID";
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
        this.select18.children[2].getComponent(cc.Label).string="职 业";
        this.select19.children[2].getComponent(cc.Label).string="职 业";
        this.select20.children[2].getComponent(cc.Label).string="职 业";
        this.select21.children[2].getComponent(cc.Label).string="职 业";
        this.select22.children[2].getComponent(cc.Label).string="职 业";
        this.select23.children[2].getComponent(cc.Label).string="职 业";
        this.select24.children[2].getComponent(cc.Label).string="职 业";
        this.select25.children[2].getComponent(cc.Label).string="职 业";
        cc.sys.localStorage.setItem('nid1',"ID");
        cc.sys.localStorage.setItem('nselect1',"职 业");
        cc.sys.localStorage.setItem('nid2',"ID");
        cc.sys.localStorage.setItem('nselect2',"职 业");
        cc.sys.localStorage.setItem('nid3',"ID");
        cc.sys.localStorage.setItem('nselect3',"职 业");
        cc.sys.localStorage.setItem('nid4',"ID");
        cc.sys.localStorage.setItem('nselect4',"职 业");
        cc.sys.localStorage.setItem('nid5',"ID");
        cc.sys.localStorage.setItem('nselect5',"职 业");
        cc.sys.localStorage.setItem('nid6',"ID");
        cc.sys.localStorage.setItem('nselect6',"职 业");
        cc.sys.localStorage.setItem('nid7',"ID");
        cc.sys.localStorage.setItem('nselect7',"职 业");
        cc.sys.localStorage.setItem('nid8',"ID");
        cc.sys.localStorage.setItem('nselect8',"职 业");
        cc.sys.localStorage.setItem('nid9',"ID");
        cc.sys.localStorage.setItem('nselect9',"职 业");
        cc.sys.localStorage.setItem('nid10',"ID");
        cc.sys.localStorage.setItem('nselect10',"职 业");
        cc.sys.localStorage.setItem('nid11',"ID");
        cc.sys.localStorage.setItem('nselect11',"职 业");
        cc.sys.localStorage.setItem('nid12',"ID");
        cc.sys.localStorage.setItem('nselect12',"职 业");
        cc.sys.localStorage.setItem('nid13',"ID");
        cc.sys.localStorage.setItem('nselect13',"职 业");
        cc.sys.localStorage.setItem('nid14',"ID");
        cc.sys.localStorage.setItem('nselect14',"职 业");
        cc.sys.localStorage.setItem('nid15',"ID");
        cc.sys.localStorage.setItem('nselect15',"职 业");
        cc.sys.localStorage.setItem('nid16',"ID");
        cc.sys.localStorage.setItem('nselect16',"职 业");
        cc.sys.localStorage.setItem('nid17',"ID");
        cc.sys.localStorage.setItem('nselect17',"职 业");
        cc.sys.localStorage.setItem('nid18',"ID");
        cc.sys.localStorage.setItem('nselect18',"职 业");
        cc.sys.localStorage.setItem('nid19',"ID");
        cc.sys.localStorage.setItem('nselect19',"职 业");
        cc.sys.localStorage.setItem('nid20',"ID");
        cc.sys.localStorage.setItem('nselect20',"职 业");
        cc.sys.localStorage.setItem('nid21',"ID");
        cc.sys.localStorage.setItem('nselect21',"职 业");
        cc.sys.localStorage.setItem('nid22',"ID");
        cc.sys.localStorage.setItem('nselect22',"职 业");
        cc.sys.localStorage.setItem('nid23',"ID");
        cc.sys.localStorage.setItem('nselect23',"职 业");
        cc.sys.localStorage.setItem('nid24',"ID");
        cc.sys.localStorage.setItem('nselect24',"职 业");
        cc.sys.localStorage.setItem('nid25',"ID");
        cc.sys.localStorage.setItem('nselect25',"职 业");
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
