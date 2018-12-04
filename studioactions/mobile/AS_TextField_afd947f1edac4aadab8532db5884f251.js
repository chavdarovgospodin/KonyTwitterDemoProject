function AS_TextField_afd947f1edac4aadab8532db5884f251(eventobject, changedtext) {
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