function AS_TextField_d96ed4192fd04e1ebda5d7fdcbcc894d(eventobject, changedtext) {
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