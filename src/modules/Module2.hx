package modules;

import haxe.ui.components.Label;
import haxe.ui.containers.VBox;

@:build(haxe.ui.macros.ComponentMacros.build("Module2View.xml"))
//@:xml("<vbox></vbox>")
@:keep @:expose
class Module2 extends VBox {
    public function new() {
        super();
    }
    public function addLabel(txt){
        var label:Label=new Label();
        label.text=txt;
        this.addComponent(label);
    }
}