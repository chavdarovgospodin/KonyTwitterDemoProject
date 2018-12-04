function AS_TextField_f4b6fdd93aac4639aa420be558fca5dd(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.FlexBorderUser.skin = "skinFlexBorderBlue";
        }, null);
    } else {
        (function() {
            self.view.FlexBorderUser.skin = "skinFlexBorderBlue";
        })();
    }
}