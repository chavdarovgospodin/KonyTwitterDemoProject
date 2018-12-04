function AS_TextField_b046f29d861342ffbdf7dfa7b328f57f(eventobject, changedtext) {
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