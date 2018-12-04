function AS_TextField_hec2ebe65d32436bba9a9fbcf69cde16(eventobject, changedtext) {
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