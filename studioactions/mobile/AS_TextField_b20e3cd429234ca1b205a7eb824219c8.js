function AS_TextField_b20e3cd429234ca1b205a7eb824219c8(eventobject, changedtext) {
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