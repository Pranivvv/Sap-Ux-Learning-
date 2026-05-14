sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {

    "use strict";

    return Controller.extend("extendedcontrol.extendedcontrol.controller.ExtendControl", {

        onPress: function() {

            MessageToast.show("Custom Button Pressed");

        }

    });

});