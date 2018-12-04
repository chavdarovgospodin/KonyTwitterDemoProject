function AS_TextField_ed12e55d7e5f47fba0cab127397dfcc3(eventobject, changedtext) {
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