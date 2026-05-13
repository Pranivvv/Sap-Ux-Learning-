sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("saplearning.saplearning.controller.App2", {
        onInputChange: function (oEvent) {
            var sValue = oEvent.getParameter("value");
            var bEnable = sValue.trim().length > 0;

            this.byId("submitButton").setEnabled(bEnable);
        },

        onSubmit: function () {
            MessageToast.show("Button clicked");
        }
    });
});