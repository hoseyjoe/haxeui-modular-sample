// Generated by Haxe 4.3.5
(function ($hx_exports, $global) { "use strict";
$hx_exports["modules"] = $hx_exports["modules"] || {};
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
Math.__name__ = true;
var haxe_ds_StringMap = function() { };
haxe_ds_StringMap.__name__ = true;
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var haxe_ui_util_VariantType = $hxEnums["haxe.ui.util.VariantType"] = { __ename__:true,__constructs__:null
	,VT_Int: ($_=function(s) { return {_hx_index:0,s:s,__enum__:"haxe.ui.util.VariantType",toString:$estr}; },$_._hx_name="VT_Int",$_.__params__ = ["s"],$_)
	,VT_Float: ($_=function(s) { return {_hx_index:1,s:s,__enum__:"haxe.ui.util.VariantType",toString:$estr}; },$_._hx_name="VT_Float",$_.__params__ = ["s"],$_)
	,VT_String: ($_=function(s) { return {_hx_index:2,s:s,__enum__:"haxe.ui.util.VariantType",toString:$estr}; },$_._hx_name="VT_String",$_.__params__ = ["s"],$_)
	,VT_Bool: ($_=function(s) { return {_hx_index:3,s:s,__enum__:"haxe.ui.util.VariantType",toString:$estr}; },$_._hx_name="VT_Bool",$_.__params__ = ["s"],$_)
	,VT_Array: ($_=function(s) { return {_hx_index:4,s:s,__enum__:"haxe.ui.util.VariantType",toString:$estr}; },$_._hx_name="VT_Array",$_.__params__ = ["s"],$_)
	,VT_DataSource: ($_=function(s) { return {_hx_index:5,s:s,__enum__:"haxe.ui.util.VariantType",toString:$estr}; },$_._hx_name="VT_DataSource",$_.__params__ = ["s"],$_)
	,VT_Component: ($_=function(s) { return {_hx_index:6,s:s,__enum__:"haxe.ui.util.VariantType",toString:$estr}; },$_._hx_name="VT_Component",$_.__params__ = ["s"],$_)
	,VT_Date: ($_=function(s) { return {_hx_index:7,s:s,__enum__:"haxe.ui.util.VariantType",toString:$estr}; },$_._hx_name="VT_Date",$_.__params__ = ["s"],$_)
	,VT_ImageData: ($_=function(s) { return {_hx_index:8,s:s,__enum__:"haxe.ui.util.VariantType",toString:$estr}; },$_._hx_name="VT_ImageData",$_.__params__ = ["s"],$_)
};
haxe_ui_util_VariantType.__constructs__ = [haxe_ui_util_VariantType.VT_Int,haxe_ui_util_VariantType.VT_Float,haxe_ui_util_VariantType.VT_String,haxe_ui_util_VariantType.VT_Bool,haxe_ui_util_VariantType.VT_Array,haxe_ui_util_VariantType.VT_DataSource,haxe_ui_util_VariantType.VT_Component,haxe_ui_util_VariantType.VT_Date,haxe_ui_util_VariantType.VT_ImageData];
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var modules_Module1 = function() {
	haxe.ui.containers.VBox.call(this);
	var c0 = new haxe.ui.components.Label();
	c0.set_text("Module1");
	this.addComponent(c0);
	var c1 = new haxe.ui.components.DropDown();
	var ds1 = new haxe.ui.data.ArrayDataSource();
	ds1.add({ text : "Item 1", id : "item"});
	ds1.add({ text : "Item 2", id : "item"});
	ds1.add({ text : "Item 3", id : "item"});
	ds1.add({ text : "Item 4", id : "item"});
	c1.set_dataSource(ds1);
	this.addComponent(c1);
	this.bindingRoot = true;
};
$hx_exports["modules"]["Module1"] = modules_Module1;
modules_Module1.__name__ = true;
modules_Module1.__super__ = haxe.ui.containers.VBox;
modules_Module1.prototype = $extend(haxe.ui.containers.VBox.prototype,{
	registerBehaviours: function() {
		haxe.ui.containers.VBox.prototype.registerBehaviours.call(this);
	}
	,cloneComponent: function() {
		var c = haxe.ui.containers.VBox.prototype.cloneComponent.call(this);
		if(this.get_childComponents().length != c.get_childComponents().length) {
			var _g = 0;
			var _g1 = this.get_childComponents();
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				c.addComponent(child.cloneComponent());
			}
		}
		this.postCloneComponent(c);
		return c;
	}
	,self: function() {
		return new modules_Module1();
	}
});
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = "Date";
js_Boot.__toStr = ({ }).toString;
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, {});

//# sourceMappingURL=module1.js.map