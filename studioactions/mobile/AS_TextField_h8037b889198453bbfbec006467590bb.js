function AS_TextField_h8037b889198453bbfbec006467590bb(eventobject, changedtext) {
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