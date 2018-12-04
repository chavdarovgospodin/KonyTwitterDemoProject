function AS_TextField_dff5c5ad5db940fbbe10d355d561e21b(eventobject, changedtext) {
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