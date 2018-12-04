function AS_TextField_e82a630016be4e69b7e3e184d87d337a(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.FlexBorderPass.skin = "skinFooterBorderDef";
        }, null);
    } else {
        (function() {
            self.view.FlexBorderPass.skin = "skinFooterBorderDef";
        })();
    }
}