function AS_TextField_h89b80ed5be4414b98dceff5a82e0763(eventobject, changedtext) {
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