define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
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
    },
    /** preShow defined for RegisterForm **/
    AS_Form_eaa79c1abfdc442087c8fea56cb3fd88: function AS_Form_eaa79c1abfdc442087c8fea56cb3fd88(eventobject) {
        var self = this;
        return self.defaultInputProp.call(this);
    }
});