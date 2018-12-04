function AS_TextField_f2fb0eef66de4b239957ffd108cea5d9(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.flxBorderUsername.skin = "flxDefBorderSkin";
        }, null);
    } else {
        (function() {
            self.view.flxBorderUsername.skin = "flxDefBorderSkin";
        })();
    }
}