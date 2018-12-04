function AS_TextField_ga21dd53ca9449baaf136671ffd3369c(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.flxBorderUsername.skin = "flxDefBorderSkin";
        }, null);
    } else {
        (function() {
            self.view.flxBorderUsername.skin = "flxDefBorderSkin";
        })();
    }
}