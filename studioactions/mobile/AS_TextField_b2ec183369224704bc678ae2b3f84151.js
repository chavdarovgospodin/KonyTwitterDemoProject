function AS_TextField_b2ec183369224704bc678ae2b3f84151(eventobject, changedtext) {
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