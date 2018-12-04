function AS_TextField_f210c32e981d462db98c47323a745139(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.flxBorderPassword.skin = "flxDefBorderSkin";
        }, null);
    } else {
        (function() {
            self.view.flxBorderPassword.skin = "flxDefBorderSkin";
        })();
    }
}