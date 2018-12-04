function AS_TextField_c63c37ca1f0848b188d9b9764714e6ad(eventobject, changedtext) {
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