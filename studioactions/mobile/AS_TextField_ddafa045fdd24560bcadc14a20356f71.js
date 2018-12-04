function AS_TextField_ddafa045fdd24560bcadc14a20356f71(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.flxBorderPassword.skin = "flxBorderFocusSkin";
        }, null);
    } else {
        (function() {
            self.view.flxBorderPassword.skin = "flxBorderFocusSkin";
        })();
    }
}