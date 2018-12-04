function AS_TextField_a5d6863ab3c6499e94cde63246e0e8f3(eventobject, changedtext) {
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