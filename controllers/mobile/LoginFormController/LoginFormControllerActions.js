define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for FooterComp **/
    AS_UWI_e4ffd94e86a14b1586031cb16b81eee2: function AS_UWI_e4ffd94e86a14b1586031cb16b81eee2(eventobject) {
        var self = this;
        return self.validate.call(this);
    },
    /** onBeginEditing defined for txtUsername **/
    AS_TextField_bfa40862f162450b9b6f7f2464e06752: function AS_TextField_bfa40862f162450b9b6f7f2464e06752(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.flxBorderUsername.skin = "flxBorderFocusSkin";
            }, null);
        } else {
            (function() {
                self.view.flxBorderUsername.skin = "flxBorderFocusSkin";
            })();
        }
    },
    /** onEndEditing defined for txtUsername **/
    AS_TextField_c63c37ca1f0848b188d9b9764714e6ad: function AS_TextField_c63c37ca1f0848b188d9b9764714e6ad(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.flxBorderUsername.skin = "flxDefBorderSkin";
            }, null);
        } else {
            (function() {
                self.view.flxBorderUsername.skin = "flxDefBorderSkin";
            })();
        }
    },
    /** onBeginEditing defined for txtUsername **/
    AS_TextField_h8037b889198453bbfbec006467590bb: function AS_TextField_h8037b889198453bbfbec006467590bb(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.flxBorderUsername.skin = "flxBorderFocusSkin";
            }, null);
        } else {
            (function() {
                self.view.flxBorderUsername.skin = "flxBorderFocusSkin";
            })();
        }
    },
    /** onEndEditing defined for txtUsername **/
    AS_TextField_d4b806d6c04b49cca780b833d19f952a: function AS_TextField_d4b806d6c04b49cca780b833d19f952a(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.flxBorderUsername.skin = "flxDefBorderSkin";
            }, null);
        } else {
            (function() {
                self.view.flxBorderUsername.skin = "flxDefBorderSkin";
            })();
        }
    },
    /** onBeginEditing defined for txtPassword **/
    AS_TextField_c818be21c89549d1a8ea32d0bddc4c1f: function AS_TextField_c818be21c89549d1a8ea32d0bddc4c1f(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.flxBorderPassword.skin = "flxBorderFocusSkin";
            }, null);
        } else {
            (function() {
                self.view.flxBorderPassword.skin = "flxBorderFocusSkin";
            })();
        }
    },
    /** onEndEditing defined for txtPassword **/
    AS_TextField_hec2ebe65d32436bba9a9fbcf69cde16: function AS_TextField_hec2ebe65d32436bba9a9fbcf69cde16(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.flxBorderPassword.skin = "flxDefBorderSkin";
            }, null);
        } else {
            (function() {
                self.view.flxBorderPassword.skin = "flxDefBorderSkin";
            })();
        }
    },
    /** onBeginEditing defined for txtPassword **/
    AS_TextField_ddafa045fdd24560bcadc14a20356f71: function AS_TextField_ddafa045fdd24560bcadc14a20356f71(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.flxBorderPassword.skin = "flxBorderFocusSkin";
            }, null);
        } else {
            (function() {
                self.view.flxBorderPassword.skin = "flxBorderFocusSkin";
            })();
        }
    },
    /** onEndEditing defined for txtPassword **/
    AS_TextField_a449eda0a5434f088df59baa422fb267: function AS_TextField_a449eda0a5434f088df59baa422fb267(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.flxBorderPassword.skin = "flxDefBorderSkin";
            }, null);
        } else {
            (function() {
                self.view.flxBorderPassword.skin = "flxDefBorderSkin";
            })();
        }
    }
});