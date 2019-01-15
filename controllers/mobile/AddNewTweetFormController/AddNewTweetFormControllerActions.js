define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for FlexImgProfile **/
    AS_FlexContainer_a4718dff5bba4de091f5b6dedf34e4ff: function AS_FlexContainer_a4718dff5bba4de091f5b6dedf34e4ff(eventobject) {
        var self = this;
    },
    /** onClick defined for FlexImgClose **/
    AS_FlexContainer_fe6058ba58a646e6a7bb9798f87efb4c: function AS_FlexContainer_fe6058ba58a646e6a7bb9798f87efb4c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("ListingForm");
        ntf.navigate();
    },
    /** onClick defined for FooterComp **/
    AS_UWI_b1fbf4b76ed24379a2e6fdb5c97d7d89: function AS_UWI_b1fbf4b76ed24379a2e6fdb5c97d7d89(eventobject) {
        var self = this;
        return self.createNewTweet.call(this);
    },
    /** onCapture defined for cameraWidget **/
    AS_Camera_caac461008ad4741923383c1766a0214: function AS_Camera_caac461008ad4741923383c1766a0214(eventobject) {
        var self = this;
        return self.capture.call(this);
    },
    /** preShow defined for AddNewTweetForm **/
    AS_Form_fb2ce7295ac846a98ebf435c8e73769a: function AS_Form_fb2ce7295ac846a98ebf435c8e73769a(eventobject) {
        var self = this;
        return self.clearData.call(this);
    },
    /** onClick defined for FooterComp **/
    AS_UWI_af7666e09f8f4a2fa5d73b718a3e64d7: function AS_UWI_af7666e09f8f4a2fa5d73b718a3e64d7(eventobject) {
        var self = this;
        return self.createNewTweet.call(this);
    }
});