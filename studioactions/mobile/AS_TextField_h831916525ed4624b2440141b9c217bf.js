function AS_TextField_h831916525ed4624b2440141b9c217bf(eventobject, x, y) {
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