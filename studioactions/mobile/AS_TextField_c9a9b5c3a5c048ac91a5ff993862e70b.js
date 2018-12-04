function AS_TextField_c9a9b5c3a5c048ac91a5ff993862e70b(eventobject, changedtext) {
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