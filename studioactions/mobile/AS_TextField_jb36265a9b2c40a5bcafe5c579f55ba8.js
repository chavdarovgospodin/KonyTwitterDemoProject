function AS_TextField_jb36265a9b2c40a5bcafe5c579f55ba8(eventobject, changedtext) {
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