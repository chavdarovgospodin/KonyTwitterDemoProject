function AS_TextField_c818be21c89549d1a8ea32d0bddc4c1f(eventobject, changedtext) {
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