package ;

import haxe.ui.events.UIEvent;
import haxe.ui.events.Events;
import modular.ModuleManager;
import haxe.ui.containers.VBox;
import haxe.ui.events.MouseEvent;

@:build(haxe.ui.ComponentBuilder.build("host-view.xml"))
class HostView extends VBox {
    public function new() {
        super();
        ModuleManager.instance.subDirectory=".";
        ModuleManager.instance.addStartUpModule("modules/module1.js",(e)->{
            tab1.addComponent( e.createClassInstance("modules.Module1")); 
        });

        ModuleManager.instance.get("modules/module2.js", "module.Module2").then((e)->{
            var comp= e.createClassInstance("modules.Module2");
            tab2.addComponent(comp);
            //comp.addLabel("text");
        });
        ModuleManager.instance.init();
    }
}