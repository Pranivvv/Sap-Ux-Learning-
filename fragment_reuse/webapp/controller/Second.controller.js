sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {

    "use strict";

    return Controller.extend("fragmentreuse.fragmentreuse.controller.Second", {

        onBack: function() {

            this.getOwnerComponent()
                .getRouter()
                .navTo("home");

        },

        onCommonPress: function() {

            MessageToast.show("Fragment Reused In Second View");

        }

    });

});
