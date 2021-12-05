window.__require = function e(t, c, n) {
function s(o, i) {
if (!c[o]) {
if (!t[o]) {
var a = o.split("/");
a = a[a.length - 1];
if (!t[a]) {
var r = "function" == typeof __require && __require;
if (!i && r) return r(a, !0);
if (l) return l(a, !0);
throw new Error("Cannot find module '" + o + "'");
}
}
var u = c[o] = {
exports: {}
};
t[o][0].call(u.exports, function(e) {
return s(t[o][1][e] || e);
}, u, u.exports, e, t, c, n);
}
return c[o].exports;
}
for (var l = "function" == typeof __require && __require, o = 0; o < n.length; o++) s(n[o]);
return s;
}({
ComboBoxHeal: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "ea6f7s2q5pNbrSnq3DWfyDM", "ComboBoxHeal");
cc.Class({
extends: cc.Component,
properties: {
triangle: cc.Node,
comboLabel: cc.Label,
dropDown: cc.Node,
vLayoutNode: cc.Node,
contentNode: cc.Node,
itemPrefab: cc.Prefab
},
onLoad: function() {
this.isDropDown = !1;
this.itemArray = [ "奶 毒", "奶 花", "奶 秀", "奶 歌" ];
this.initItems();
},
rotateTriangle: function() {
this.isDropDown ? this.triangle.runAction(cc.rotateTo(.5, 0).easing(cc.easeCubicActionOut())) : this.triangle.runAction(cc.rotateTo(.5, -90).easing(cc.easeCubicActionOut()));
},
showHideDropDownBox: function() {
this.isDropDown ? this.dropDown.active = !1 : this.dropDown.active = !0;
},
comboboxClicked: function() {
this.rotateTriangle();
this.showHideDropDownBox();
this.isDropDown ? this.isDropDown = !1 : this.isDropDown = !0;
},
initItems: function() {
for (var e = 0, t = 0; t < this.itemArray.length; t++) {
var c = cc.instantiate(this.itemPrefab);
c.children[1].getComponent(cc.Label).string = this.itemArray[t];
c.getComponent("Item").initComboBox(this);
this.vLayoutNode.addChild(c);
e += c.height;
}
e > this.contentNode.height && (this.contentNode.height = e);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
ComboBoxNDPS: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "0cc00hN/tRIJq0pBV7w1EMD", "ComboBoxNDPS");
cc.Class({
extends: cc.Component,
properties: {
triangle: cc.Node,
comboLabel: cc.Label,
dropDown: cc.Node,
vLayoutNode: cc.Node,
contentNode: cc.Node,
itemPrefab: cc.Prefab
},
onLoad: function() {
this.isDropDown = !1;
this.itemArray = [ "毒 经", "花 间", "冰 心", "焚 影", "气 纯", "莫 问", "田 螺", "衍 员" ];
this.initItems();
},
rotateTriangle: function() {
this.isDropDown ? this.triangle.runAction(cc.rotateTo(.5, 0).easing(cc.easeCubicActionOut())) : this.triangle.runAction(cc.rotateTo(.5, -90).easing(cc.easeCubicActionOut()));
},
showHideDropDownBox: function() {
this.isDropDown ? this.dropDown.active = !1 : this.dropDown.active = !0;
},
comboboxClicked: function() {
this.rotateTriangle();
this.showHideDropDownBox();
this.isDropDown ? this.isDropDown = !1 : this.isDropDown = !0;
},
initItems: function() {
for (var e = 0, t = 0; t < this.itemArray.length; t++) {
var c = cc.instantiate(this.itemPrefab);
c.children[1].getComponent(cc.Label).string = this.itemArray[t];
c.getComponent("Item").initComboBox(this);
this.vLayoutNode.addChild(c);
e += c.height;
}
e > this.contentNode.height && (this.contentNode.height = e);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
ComboBoxT: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "4afde6uXU5Nm7rJwlMKaz8U", "ComboBoxT");
cc.Class({
extends: cc.Component,
properties: {
triangle: cc.Node,
comboLabel: cc.Label,
dropDown: cc.Node,
vLayoutNode: cc.Node,
contentNode: cc.Node,
itemPrefab: cc.Prefab
},
onLoad: function() {
this.isDropDown = !1;
this.itemArray = [ "大 师", "喵 T", "策 T", "盾 T" ];
this.initItems();
},
rotateTriangle: function() {
this.isDropDown ? this.triangle.runAction(cc.rotateTo(.5, 0).easing(cc.easeCubicActionOut())) : this.triangle.runAction(cc.rotateTo(.5, -90).easing(cc.easeCubicActionOut()));
},
showHideDropDownBox: function() {
this.isDropDown ? this.dropDown.active = !1 : this.dropDown.active = !0;
},
comboboxClicked: function() {
this.rotateTriangle();
this.showHideDropDownBox();
this.isDropDown ? this.isDropDown = !1 : this.isDropDown = !0;
},
initItems: function() {
for (var e = 0, t = 0; t < this.itemArray.length; t++) {
var c = cc.instantiate(this.itemPrefab);
c.children[1].getComponent(cc.Label).string = this.itemArray[t];
c.getComponent("Item").initComboBox(this);
this.vLayoutNode.addChild(c);
e += c.height;
}
e > this.contentNode.height && (this.contentNode.height = e);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
ComboBoxWDPS: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "3fd73h99UtLL6MRkNxvECBP", "ComboBoxWDPS");
cc.Class({
extends: cc.Component,
properties: {
triangle: cc.Node,
comboLabel: cc.Label,
dropDown: cc.Node,
vLayoutNode: cc.Node,
contentNode: cc.Node,
itemPrefab: cc.Prefab
},
onLoad: function() {
this.isDropDown = !1;
this.itemArray = [ "丐 丐", "霸 刀", "剑 纯", "黄 叽", "军 爷", "鲸 鱼", "盾 盾", "蓬 莱", "0 雪" ];
this.initItems();
},
rotateTriangle: function() {
this.isDropDown ? this.triangle.runAction(cc.rotateTo(.5, 0).easing(cc.easeCubicActionOut())) : this.triangle.runAction(cc.rotateTo(.5, -90).easing(cc.easeCubicActionOut()));
},
showHideDropDownBox: function() {
this.isDropDown ? this.dropDown.active = !1 : this.dropDown.active = !0;
},
comboboxClicked: function() {
this.rotateTriangle();
this.showHideDropDownBox();
this.isDropDown ? this.isDropDown = !1 : this.isDropDown = !0;
},
initItems: function() {
for (var e = 0, t = 0; t < this.itemArray.length; t++) {
var c = cc.instantiate(this.itemPrefab);
c.children[1].getComponent(cc.Label).string = this.itemArray[t];
c.getComponent("Item").initComboBox(this);
this.vLayoutNode.addChild(c);
e += c.height;
}
e > this.contentNode.height && (this.contentNode.height = e);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
ComboBox: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "b6538f8KVxKZoCpnHcGhGYl", "ComboBox");
cc.Class({
extends: cc.Component,
properties: {
triangle: cc.Node,
comboLabel: cc.Label,
dropDown: cc.Node,
vLayoutNode: cc.Node,
contentNode: cc.Node,
itemPrefab: cc.Prefab
},
onLoad: function() {
this.isDropDown = !1;
this.itemArray = [ "奶 毒", "毒 经", "丐 丐", "霸 刀", "奶 花", "花 间", "大 师", "奶 秀", "冰 心", "喵 T", "焚 影", "气 纯", "剑 纯", "奶 歌", "莫 问", "黄 叽", "策 T", "军 爷", "鲸 鱼", "田 螺", "盾 盾", "盾 T", "蓬 莱", "0 雪", "衍 员" ];
this.initItems();
},
rotateTriangle: function() {
this.isDropDown ? this.triangle.runAction(cc.rotateTo(.5, 0).easing(cc.easeCubicActionOut())) : this.triangle.runAction(cc.rotateTo(.5, -90).easing(cc.easeCubicActionOut()));
},
showHideDropDownBox: function() {
this.isDropDown ? this.dropDown.active = !1 : this.dropDown.active = !0;
},
comboboxClicked: function() {
this.rotateTriangle();
this.showHideDropDownBox();
this.isDropDown ? this.isDropDown = !1 : this.isDropDown = !0;
},
initItems: function() {
for (var e = 0, t = 0; t < this.itemArray.length; t++) {
var c = cc.instantiate(this.itemPrefab);
c.children[1].getComponent(cc.Label).string = this.itemArray[t];
c.getComponent("Item").initComboBox(this);
this.vLayoutNode.addChild(c);
e += c.height;
}
e > this.contentNode.height && (this.contentNode.height = e);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
IET10_10: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "ae96cew3g1JcLhDdvfhYkY2", "IET10_10");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id10");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select10");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id10", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select10", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET10_1: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "9c6f0kmiupC3Z8cjCQEF68S", "IET10_1");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id1");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select1");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id1", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select1", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET10_2: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "de346yzI9ROPI5sm5jBUsxK", "IET10_2");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id2");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select2");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id2", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select2", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET10_3: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "f6855M2nrRPCJ2A0q6FAOjn", "IET10_3");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id3");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select3");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id3", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select3", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET10_4: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "a1d0eowPEBOZZHBB9uopGt2", "IET10_4");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id4");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select4");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id4", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select4", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET10_5: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "17519ehD59Hi5gwmaN10rT5", "IET10_5");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id5");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select5");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id5", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select5", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET10_6: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "76aeaN6R31HE4Uldq+oLR9/", "IET10_6");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id6");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select6");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id6", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select6", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET10_7: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "c4b36N1645LsrH3iXykoZ1A", "IET10_7");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id7");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select7");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id7", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select7", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET10_8: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "eb3bfTyhvlADrWcL4Ru0Jcm", "IET10_8");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id8");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select8");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id8", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select8", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET10_9: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "22b74bjABNHWZ4pXXF69EZY", "IET10_9");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id9");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select9");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id9", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select9", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_10: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "f75dfud/XBMR5leevnljAcR", "IET25_10");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid10");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect10");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid10", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect10", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_11: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "72962lFESJBj5nSJYybqaYC", "IET25_11");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid11");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect11");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid11", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect11", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_12: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "bd6a4eBiHxHf5hg/t+k6xIQ", "IET25_12");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid12");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect12");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid12", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect12", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_13: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "03b196S2lNEfoXkoFGviTUs", "IET25_13");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid13");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect13");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid13", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect13", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_14: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "47c8bHbqVVK24eF9PcT8B9p", "IET25_14");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid14");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect14");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid14", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect14", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_15: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "594b6CNPaRJxqu8P21kYgF4", "IET25_15");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid15");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect15");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid15", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect15", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_16: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "9de66XedtdBzKJJEobDU1p0", "IET25_16");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid16");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect16");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid16", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect16", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_17: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "2eb17f5MSVHs5y1ptHoLuyb", "IET25_17");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid17");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect17");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid17", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect17", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_18: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "c0b47e9L5ZLk5Y0/iDIWhB/", "IET25_18");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid18");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect18");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid18", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect18", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_19: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "b701adJSEtGybBVlI/mIMra", "IET25_19");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid19");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect19");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid19", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect19", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_1: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "10150EGfOdOEKbWGwu1TXNI", "IET25_1");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid1");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect1");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid1", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect1", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_20: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "9c7bbt+t9xBn6H6D7oKlU8s", "IET25_20");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid20");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect20");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid20", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect20", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_21: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "102c4nymm9OZpQaFzsSQWF3", "IET25_21");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid21");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect21");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid21", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect21", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_22: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "ef97464tUNFCYbZEL7vuwvg", "IET25_22");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid22");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect22");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid22", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect22", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
"IET25_23 ": [ function(e, t, c) {
"use strict";
cc._RF.push(t, "a9692+xaxtEIKxVCVx/UA/Z", "IET25_23 ");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid23");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect23");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid23", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect23", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_24: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "f45cfswvP9Iq4YQbQrUwBKt", "IET25_24");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid24");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect24");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid24", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect24", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_25: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "6b809s7BvJF1oZNzzOmZQb3", "IET25_25");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid25");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect25");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid25", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect25", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_2: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "6e0ddVGG2xGool124tp0Ovz", "IET25_2");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid2");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect2");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid2", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect2", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_3: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "119d0XylExEkIoz60YkLEyL", "IET25_3");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid3");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect3");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid3", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect3", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_4: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "14950XoMm5NFr64qMk0903m", "IET25_4");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid4");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect4");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid4", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect4", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_5: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "f740eXW4ENNsboghlynkBQj", "IET25_5");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid5");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect5");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid5", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect5", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_6: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "3de31ATNEFEEoXD26CDpVth", "IET25_6");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid6");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect6");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid6", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect6", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_7: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "1b2511fZrBFdKEdj7S34TUg", "IET25_7");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid7");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect7");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid7", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect7", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_8: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "97b47ybX4dCZ6OX+LLbsnt5", "IET25_8");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid8");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect8");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid8", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect8", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IET25_9: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "42cabwm0LlL/YnqFHG0oFuV", "IET25_9");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("nid9");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("nselect9");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("nid9", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("nselect9", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_10: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "d27dams+jFIQ5BtMNQokVS8", "IETy10_10");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid10");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect10");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid10", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect10", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_11: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "1a1d1CpUAZA6LcPiDF4CLKO", "IETy10_11");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid11");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect11");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid11", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect11", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_12: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "4d59crfBqBFIJMD3taZ4YoA", "IETy10_12");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid12");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect12");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid12", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect12", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_13: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "c2d21FPUBNO7oN4HtV8OzQ4", "IETy10_13");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid13");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect13");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid13", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect13", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_14: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "78d67Zu/i9Mg7sfSxAUxk/n", "IETy10_14");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid14");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect14");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid14", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect14", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_15: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "01a0ezl/UlHr4BUKmbzjoTA", "IETy10_15");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid15");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect15");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid15", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect15", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_16: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "b4bceE0YYJFW5GO5XXcvsOr", "IETy10_16");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid16");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect16");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid16", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect16", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_17: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "4f649ohQ+lJpo9w8WSz6oXL", "IETy10_17");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid17");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect17");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid17", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect17", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_1: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "4a360KSXZBE2b4pF22MHTAE", "IETy10_1");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid1");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect1");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid1", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect1", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_2: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "99cb04p6KNHdIUrnBoBq82k", "IETy10_2");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid2");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect2");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid2", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect2", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_3: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "ba5e0hVPGNLK7lB3U2A4uRQ", "IETy10_3");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid3");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect3");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid3", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect3", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_4: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "35096G34w9OeZegR5mB9KO1", "IETy10_4");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid4");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect4");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid4", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("msselect4", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_5: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "442d5M4mrVPK7oVZNhWysfY", "IETy10_5");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid5");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect5");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid5", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect5", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_6: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "eeb9cLGGkJOFqRutQ+gY6zs", "IETy10_6");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid6");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect6");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid6", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect6", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_7: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "934f30H0PNKT42azgG98/ei", "IETy10_7");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid7");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect7");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid7", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect7", this.selects.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_8: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "81f3duX5q1M0r9bWG2nglqp", "IETy10_8");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid8");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect8");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid8", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect8", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
IETy10_9: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "f2a33JCqBJMKKTYs91bSWTM", "IETy10_9");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("mid9");
null != e && (this.self.children[2].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("mselect9");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("mid9", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("mselect9", this.select.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
Item: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "013e5Vd13ZFgryT2J99lyMy", "Item");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
initComboBox: function(e) {
this.cb = e;
},
itemBtn: function(e) {
this.cb.comboLabel.string = e.target.children[1].getComponent(cc.Label).string;
this.cb.comboboxClicked();
}
});
cc._RF.pop();
}, {} ],
honor: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "3e6b93w6tRMa4aj6+M9lxiX", "honor");
cc.Class({
extends: cc.Component,
properties: {},
toTeam10: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
cc.director.loadScene("团队10人");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
inputEnd: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "c6a61nsKxpB66vXrCNOYW5f", "inputEnd");
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
}
},
onLoad: function() {
var e = cc.sys.localStorage.getItem("id");
null != e && (this.self.children[1].getComponent(cc.Label).string = e);
var t = cc.sys.localStorage.getItem("select");
null != t && (this.select.children[2].getComponent(cc.Label).string = t);
},
start: function() {},
inputEnd: function() {
cc.sys.localStorage.setItem("id", this.self.children[1].getComponent(cc.Label).string);
cc.sys.localStorage.setItem("select", this.self.children[2].getComponent(cc.Label).string);
}
});
cc._RF.pop();
}, {} ],
resetT10: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "ffb52VBzPpO5qb7KsEzWPyu", "resetT10");
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
},
resetNow: function() {
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
this.select1.children[2].getComponent(cc.Label).string = "职 业";
this.select2.children[2].getComponent(cc.Label).string = "职 业";
this.select3.children[2].getComponent(cc.Label).string = "职 业";
this.select4.children[2].getComponent(cc.Label).string = "职 业";
this.select5.children[2].getComponent(cc.Label).string = "职 业";
this.select6.children[2].getComponent(cc.Label).string = "职 业";
this.select7.children[2].getComponent(cc.Label).string = "职 业";
this.select8.children[2].getComponent(cc.Label).string = "职 业";
this.select9.children[2].getComponent(cc.Label).string = "职 业";
this.select10.children[2].getComponent(cc.Label).string = "职 业";
cc.sys.localStorage.setItem("id1", "ID");
cc.sys.localStorage.setItem("select1", "职 业");
cc.sys.localStorage.setItem("id2", "ID");
cc.sys.localStorage.setItem("select2", "职 业");
cc.sys.localStorage.setItem("id3", "ID");
cc.sys.localStorage.setItem("select3", "职 业");
cc.sys.localStorage.setItem("id4", "ID");
cc.sys.localStorage.setItem("select4", "职 业");
cc.sys.localStorage.setItem("id5", "ID");
cc.sys.localStorage.setItem("select5", "职 业");
cc.sys.localStorage.setItem("id6", "ID");
cc.sys.localStorage.setItem("select6", "职 业");
cc.sys.localStorage.setItem("id7", "ID");
cc.sys.localStorage.setItem("select7", "职 业");
cc.sys.localStorage.setItem("id8", "ID");
cc.sys.localStorage.setItem("select8", "职 业");
cc.sys.localStorage.setItem("id9", "ID");
cc.sys.localStorage.setItem("select9", "职 业");
cc.sys.localStorage.setItem("id10", "ID");
cc.sys.localStorage.setItem("select10", "职 业");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
resetT25: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "e83bdEo231IJa1EO6PaPPEa", "resetT25");
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
select11: {
type: cc.Node,
default: null
},
select12: {
type: cc.Node,
default: null
},
select13: {
type: cc.Node,
default: null
},
select14: {
type: cc.Node,
default: null
},
select15: {
type: cc.Node,
default: null
},
select16: {
type: cc.Node,
default: null
},
select17: {
type: cc.Node,
default: null
},
select18: {
type: cc.Node,
default: null
},
select19: {
type: cc.Node,
default: null
},
select20: {
type: cc.Node,
default: null
},
select21: {
type: cc.Node,
default: null
},
select22: {
type: cc.Node,
default: null
},
select23: {
type: cc.Node,
default: null
},
select24: {
type: cc.Node,
default: null
},
select25: {
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
},
input11: {
type: cc.EditBox,
default: null
},
input12: {
type: cc.EditBox,
default: null
},
input13: {
type: cc.EditBox,
default: null
},
input14: {
type: cc.EditBox,
default: null
},
input15: {
type: cc.EditBox,
default: null
},
input16: {
type: cc.EditBox,
default: null
},
input17: {
type: cc.EditBox,
default: null
},
input18: {
type: cc.EditBox,
default: null
},
input19: {
type: cc.EditBox,
default: null
},
input20: {
type: cc.EditBox,
default: null
},
input21: {
type: cc.EditBox,
default: null
},
input22: {
type: cc.EditBox,
default: null
},
input23: {
type: cc.EditBox,
default: null
},
input24: {
type: cc.EditBox,
default: null
},
input25: {
type: cc.EditBox,
default: null
}
},
resetNow: function() {
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
this.input11.string = "";
this.input12.string = "";
this.input13.string = "";
this.input14.string = "";
this.input15.string = "";
this.input16.string = "";
this.input17.string = "";
this.input18.string = "";
this.input19.string = "";
this.input20.string = "";
this.input21.string = "";
this.input22.string = "";
this.input23.string = "";
this.input24.string = "";
this.input25.string = "";
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
this.input11.placeholder = "ID";
this.input12.placeholder = "ID";
this.input13.placeholder = "ID";
this.input14.placeholder = "ID";
this.input15.placeholder = "ID";
this.input16.placeholder = "ID";
this.input17.placeholder = "ID";
this.input18.placeholder = "ID";
this.input19.placeholder = "ID";
this.input20.placeholder = "ID";
this.input21.placeholder = "ID";
this.input22.placeholder = "ID";
this.input23.placeholder = "ID";
this.input24.placeholder = "ID";
this.input25.placeholder = "ID";
this.select1.children[2].getComponent(cc.Label).string = "职 业";
this.select2.children[2].getComponent(cc.Label).string = "职 业";
this.select3.children[2].getComponent(cc.Label).string = "职 业";
this.select4.children[2].getComponent(cc.Label).string = "职 业";
this.select5.children[2].getComponent(cc.Label).string = "职 业";
this.select6.children[2].getComponent(cc.Label).string = "职 业";
this.select7.children[2].getComponent(cc.Label).string = "职 业";
this.select8.children[2].getComponent(cc.Label).string = "职 业";
this.select9.children[2].getComponent(cc.Label).string = "职 业";
this.select10.children[2].getComponent(cc.Label).string = "职 业";
this.select11.children[2].getComponent(cc.Label).string = "职 业";
this.select12.children[2].getComponent(cc.Label).string = "职 业";
this.select13.children[2].getComponent(cc.Label).string = "职 业";
this.select14.children[2].getComponent(cc.Label).string = "职 业";
this.select15.children[2].getComponent(cc.Label).string = "职 业";
this.select16.children[2].getComponent(cc.Label).string = "职 业";
this.select17.children[2].getComponent(cc.Label).string = "职 业";
this.select18.children[2].getComponent(cc.Label).string = "职 业";
this.select19.children[2].getComponent(cc.Label).string = "职 业";
this.select20.children[2].getComponent(cc.Label).string = "职 业";
this.select21.children[2].getComponent(cc.Label).string = "职 业";
this.select22.children[2].getComponent(cc.Label).string = "职 业";
this.select23.children[2].getComponent(cc.Label).string = "职 业";
this.select24.children[2].getComponent(cc.Label).string = "职 业";
this.select25.children[2].getComponent(cc.Label).string = "职 业";
cc.sys.localStorage.setItem("nid1", "ID");
cc.sys.localStorage.setItem("nselect1", "职 业");
cc.sys.localStorage.setItem("nid2", "ID");
cc.sys.localStorage.setItem("nselect2", "职 业");
cc.sys.localStorage.setItem("nid3", "ID");
cc.sys.localStorage.setItem("nselect3", "职 业");
cc.sys.localStorage.setItem("nid4", "ID");
cc.sys.localStorage.setItem("nselect4", "职 业");
cc.sys.localStorage.setItem("nid5", "ID");
cc.sys.localStorage.setItem("nselect5", "职 业");
cc.sys.localStorage.setItem("nid6", "ID");
cc.sys.localStorage.setItem("nselect6", "职 业");
cc.sys.localStorage.setItem("nid7", "ID");
cc.sys.localStorage.setItem("nselect7", "职 业");
cc.sys.localStorage.setItem("nid8", "ID");
cc.sys.localStorage.setItem("nselect8", "职 业");
cc.sys.localStorage.setItem("nid9", "ID");
cc.sys.localStorage.setItem("nselect9", "职 业");
cc.sys.localStorage.setItem("nid10", "ID");
cc.sys.localStorage.setItem("nselect10", "职 业");
cc.sys.localStorage.setItem("nid11", "ID");
cc.sys.localStorage.setItem("nselect11", "职 业");
cc.sys.localStorage.setItem("nid12", "ID");
cc.sys.localStorage.setItem("nselect12", "职 业");
cc.sys.localStorage.setItem("nid13", "ID");
cc.sys.localStorage.setItem("nselect13", "职 业");
cc.sys.localStorage.setItem("nid14", "ID");
cc.sys.localStorage.setItem("nselect14", "职 业");
cc.sys.localStorage.setItem("nid15", "ID");
cc.sys.localStorage.setItem("nselect15", "职 业");
cc.sys.localStorage.setItem("nid16", "ID");
cc.sys.localStorage.setItem("nselect16", "职 业");
cc.sys.localStorage.setItem("nid17", "ID");
cc.sys.localStorage.setItem("nselect17", "职 业");
cc.sys.localStorage.setItem("nid18", "ID");
cc.sys.localStorage.setItem("nselect18", "职 业");
cc.sys.localStorage.setItem("nid19", "ID");
cc.sys.localStorage.setItem("nselect19", "职 业");
cc.sys.localStorage.setItem("nid20", "ID");
cc.sys.localStorage.setItem("nselect20", "职 业");
cc.sys.localStorage.setItem("nid21", "ID");
cc.sys.localStorage.setItem("nselect21", "职 业");
cc.sys.localStorage.setItem("nid22", "ID");
cc.sys.localStorage.setItem("nselect22", "职 业");
cc.sys.localStorage.setItem("nid23", "ID");
cc.sys.localStorage.setItem("nselect23", "职 业");
cc.sys.localStorage.setItem("nid24", "ID");
cc.sys.localStorage.setItem("nselect24", "职 业");
cc.sys.localStorage.setItem("nid25", "ID");
cc.sys.localStorage.setItem("nselect25", "职 业");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
resetTy10: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "ab7fcRPd6pLJ62v2nLJqVkT", "resetTy10");
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
select11: {
type: cc.Node,
default: null
},
select12: {
type: cc.Node,
default: null
},
select13: {
type: cc.Node,
default: null
},
select14: {
type: cc.Node,
default: null
},
select15: {
type: cc.Node,
default: null
},
select16: {
type: cc.Node,
default: null
},
select17: {
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
},
input11: {
type: cc.EditBox,
default: null
},
input12: {
type: cc.EditBox,
default: null
},
input13: {
type: cc.EditBox,
default: null
},
input14: {
type: cc.EditBox,
default: null
},
input15: {
type: cc.EditBox,
default: null
},
input16: {
type: cc.EditBox,
default: null
},
input17: {
type: cc.EditBox,
default: null
}
},
resetNow: function() {
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
this.input11.string = "";
this.input12.string = "";
this.input13.string = "";
this.input14.string = "";
this.input15.string = "";
this.input16.string = "";
this.input17.string = "";
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
this.input11.placeholder = "ID";
this.input12.placeholder = "ID";
this.input13.placeholder = "ID";
this.input14.placeholder = "ID";
this.input15.placeholder = "ID";
this.input16.placeholder = "ID";
this.input17.placeholder = "ID";
this.select1.children[2].getComponent(cc.Label).string = "职 业";
this.select2.children[2].getComponent(cc.Label).string = "职 业";
this.select3.children[2].getComponent(cc.Label).string = "职 业";
this.select4.children[2].getComponent(cc.Label).string = "职 业";
this.select5.children[2].getComponent(cc.Label).string = "职 业";
this.select6.children[2].getComponent(cc.Label).string = "职 业";
this.select7.children[2].getComponent(cc.Label).string = "职 业";
this.select8.children[2].getComponent(cc.Label).string = "职 业";
this.select9.children[2].getComponent(cc.Label).string = "职 业";
this.select10.children[2].getComponent(cc.Label).string = "职 业";
this.select11.children[2].getComponent(cc.Label).string = "职 业";
this.select12.children[2].getComponent(cc.Label).string = "职 业";
this.select13.children[2].getComponent(cc.Label).string = "职 业";
this.select14.children[2].getComponent(cc.Label).string = "职 业";
this.select15.children[2].getComponent(cc.Label).string = "职 业";
this.select16.children[2].getComponent(cc.Label).string = "职 业";
this.select17.children[2].getComponent(cc.Label).string = "职 业";
cc.sys.localStorage.setItem("mid1", "ID");
cc.sys.localStorage.setItem("mselect1", "职 业");
cc.sys.localStorage.setItem("mid2", "ID");
cc.sys.localStorage.setItem("mselect2", "职 业");
cc.sys.localStorage.setItem("mid3", "ID");
cc.sys.localStorage.setItem("mselect3", "职 业");
cc.sys.localStorage.setItem("mid4", "ID");
cc.sys.localStorage.setItem("mselect4", "职 业");
cc.sys.localStorage.setItem("mid5", "ID");
cc.sys.localStorage.setItem("mselect5", "职 业");
cc.sys.localStorage.setItem("mid6", "ID");
cc.sys.localStorage.setItem("mselect6", "职 业");
cc.sys.localStorage.setItem("mid7", "ID");
cc.sys.localStorage.setItem("mselect7", "职 业");
cc.sys.localStorage.setItem("mid8", "ID");
cc.sys.localStorage.setItem("mselect8", "职 业");
cc.sys.localStorage.setItem("mid9", "ID");
cc.sys.localStorage.setItem("mselect9", "职 业");
cc.sys.localStorage.setItem("mid10", "ID");
cc.sys.localStorage.setItem("mselect10", "职 业");
cc.sys.localStorage.setItem("mid11", "ID");
cc.sys.localStorage.setItem("mselect11", "职 业");
cc.sys.localStorage.setItem("mid12", "ID");
cc.sys.localStorage.setItem("mselect12", "职 业");
cc.sys.localStorage.setItem("mid13", "ID");
cc.sys.localStorage.setItem("mselect13", "职 业");
cc.sys.localStorage.setItem("mid14", "ID");
cc.sys.localStorage.setItem("mselect14", "职 业");
cc.sys.localStorage.setItem("mid15", "ID");
cc.sys.localStorage.setItem("mselect15", "职 业");
cc.sys.localStorage.setItem("mid16", "ID");
cc.sys.localStorage.setItem("mselect16", "职 业");
cc.sys.localStorage.setItem("mid17", "ID");
cc.sys.localStorage.setItem("mselect17", "职 业");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
team10: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "bdcebW1MWxE9pHFMZrdeifq", "team10");
cc.Class({
extends: cc.Component,
properties: {},
toTeam25: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("团队25人");
})));
},
toType10: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("类型10人");
})));
},
toRankingList: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
cc.director.loadScene("光荣榜");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
team25: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "000e9Oeor9O3o7VuPpJAH+w", "team25");
cc.Class({
extends: cc.Component,
properties: {},
toTeam10: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("团队10人");
})));
},
toRankingList: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
cc.director.loadScene("光荣榜");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
type10: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "bb0acjPFU5GuoGMPt0R6hxy", "type10");
cc.Class({
extends: cc.Component,
properties: {},
toTeam10: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("团队10人");
})));
},
start: function() {},
toRankingList: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
cc.director.loadScene("光荣榜");
})));
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "ComboBox", "ComboBoxHeal", "ComboBoxNDPS", "ComboBoxT", "ComboBoxWDPS", "Item", "honor", "inputEnd", "resetT10", "resetT25", "resetTy10", "team10", "team25", "type10", "IET10_1", "IET10_10", "IET10_2", "IET10_3", "IET10_4", "IET10_5", "IET10_6", "IET10_7", "IET10_8", "IET10_9", "IET25_1", "IET25_10", "IET25_11", "IET25_12", "IET25_13", "IET25_14", "IET25_15", "IET25_16", "IET25_17", "IET25_18", "IET25_19", "IET25_2", "IET25_20", "IET25_21", "IET25_22", "IET25_23 ", "IET25_24", "IET25_25", "IET25_3", "IET25_4", "IET25_5", "IET25_6", "IET25_7", "IET25_8", "IET25_9", "IETy10_1", "IETy10_10", "IETy10_11", "IETy10_12", "IETy10_13", "IETy10_14", "IETy10_15", "IETy10_16", "IETy10_17", "IETy10_2", "IETy10_3", "IETy10_4", "IETy10_5", "IETy10_6", "IETy10_7", "IETy10_8", "IETy10_9" ]);