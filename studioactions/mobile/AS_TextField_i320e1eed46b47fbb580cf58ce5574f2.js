function AS_TextField_i320e1eed46b47fbb580cf58ce5574f2(eventobject, changedtext) {
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