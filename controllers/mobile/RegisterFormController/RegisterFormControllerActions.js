define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onBeginEditing defined for textBoxUsername **/
    AS_TextField_b538e90ba50f4586a2a06c539bb462d3: function AS_TextField_b538e90ba50f4586a2a06c539bb462d3(eventobject, changedtext) {
        var self = this;
    },
    /** onEndEditing defined for textBoxUsername **/
    AS_TextField_c357ce2801b9418b8ae96d9ebfc776df: function AS_TextField_c357ce2801b9418b8ae96d9ebfc776df(eventobject, changedtext) {
        var self = this;
    },
    /** onBeginEditing defined for textBoxUsername **/
    AS_TextField_f4b6fdd93aac4639aa420be558fca5dd: function AS_TextField_f4b6fdd93aac4639aa420be558fca5dd(eventobject, changedtext) {
        var self = this;
    },
    /** onEndEditing defined for textBoxUsername **/
    AS_TextField_b046f29d861342ffbdf7dfa7b328f57f: function AS_TextField_b046f29d861342ffbdf7dfa7b328f57f(eventobject, changedtext) {
        var self = this;
    },
    /** onBeginEditing defined for textBoxPassword **/
    AS_TextField_c9a9b5c3a5c048ac91a5ff993862e70b: function AS_TextField_c9a9b5c3a5c048ac91a5ff993862e70b(eventobject, changedtext) {
        var self = this;
    },
    /** onEndEditing defined for textBoxPassword **/
    AS_TextField_e82a630016be4e69b7e3e184d87d337a: function AS_TextField_e82a630016be4e69b7e3e184d87d337a(eventobject, changedtext) {
        var self = this;
    },
    /** onBeginEditing defined for textBoxPassword **/
    AS_TextField_eebd9549d1634f10b9140946445c0d95: function AS_TextField_eebd9549d1634f10b9140946445c0d95(eventobject, changedtext) {
        var self = this;
    },
    /** onEndEditing defined for textBoxPassword **/
    AS_TextField_b20e3cd429234ca1b205a7eb824219c8: function AS_TextField_b20e3cd429234ca1b205a7eb824219c8(eventobject, changedtext) {
        var self = this;
    },
    /** onClick defined for FooterComp **/
    AS_UWI_fa2bc57758df4194a6a4cb1ffe53949c: function AS_UWI_fa2bc57758df4194a6a4cb1ffe53949c(eventobject) {
        var self = this;
        return self.valiteForms.call(this);
    },
    /** PencilClick defined for topHeader **/
    AS_UWI_a9a18c1247ef46d7887588109233e8da: function AS_UWI_a9a18c1247ef46d7887588109233e8da(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("LoginForm");
        ntf.navigate();
    }
});