function AS_TextField_eebd9549d1634f10b9140946445c0d95(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.FlexBorderPass.skin = "skinFlexBorderBlue";
        }, null);
    } else {
        (function() {
            self.view.FlexBorderPass.skin = "skinFlexBorderBlue";
        })();
    }
}