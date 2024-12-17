package modules;

import haxe.ui.containers.VBox;

@:xml('<vbox>
    <label text="Module1"/>
</vbox>')
@:keep @:expose
class Module1 extends VBox {
    public function new() {
        super();
    }
}