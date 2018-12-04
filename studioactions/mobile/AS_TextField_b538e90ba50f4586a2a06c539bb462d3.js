function AS_TextField_b538e90ba50f4586a2a06c539bb462d3(eventobject, changedtext) {
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