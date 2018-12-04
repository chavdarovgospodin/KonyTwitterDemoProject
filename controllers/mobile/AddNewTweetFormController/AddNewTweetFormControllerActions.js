define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for FlexImgProfile **/
    AS_FlexContainer_i9c9e9f779974ded831ab3dbe979f100: function AS_FlexContainer_i9c9e9f779974ded831ab3dbe979f100(eventobject) {
        var self = this;
        return self.navToProfile.call(this);
    },
    /** onClick defined for FlexImgClose **/
    AS_FlexContainer_dfa8070f5f0a4025a728ee41d56dd9f1: function AS_FlexContainer_dfa8070f5f0a4025a728ee41d56dd9f1(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("ListingForm");
        ntf.navigate();
    },
    /** onClick defined for FooterComp **/
    AS_UWI_f9caaee50baf47f98034711c9d4626be: function AS_UWI_f9caaee50baf47f98034711c9d4626be(eventobject) {
        var self = this;
        return self.createNewTweet.call(this);
    }
});