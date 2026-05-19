sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {

    "use strict";

    return Controller.extend("fragmentreuse.fragmentreuse.controller.Home", {

        onNext: function() {

            this.getOwnerComponent()
                .getRouter()
                .navTo("second");

        },

        onCommonPress: function() {

            MessageToast.show("Button From Fragment");

        }

    });

});
