function AS_TextField_c357ce2801b9418b8ae96d9ebfc776df(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.FlexBorderUser.skin = "skinFooterBorderDef";
        }, null);
    } else {
        (function() {
            self.view.FlexBorderUser.skin = "skinFooterBorderDef";
        })();
    }
}