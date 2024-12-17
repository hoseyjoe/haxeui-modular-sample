package ;

import haxe.ui.HaxeUIApp;

class Host {
    public static function main() {
        var app = new HaxeUIApp();
        app.ready(function() {
            app.addComponent(new HostView());

            app.start();
        });
    }
}
