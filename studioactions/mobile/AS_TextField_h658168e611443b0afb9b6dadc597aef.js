function AS_TextField_h658168e611443b0afb9b6dadc597aef(eventobject, changedtext) {
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