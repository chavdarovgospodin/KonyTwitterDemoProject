function AS_TextField_bfa40862f162450b9b6f7f2464e06752(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.flxBorderUsername.skin = "flxBorderFocusSkin";
        }, null);
    } else {
        (function() {
            self.view.flxBorderUsername.skin = "flxBorderFocusSkin";
        })();
    }
}