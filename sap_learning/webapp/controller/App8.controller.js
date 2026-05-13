sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("saplearning.saplearning.controller.App8", {

        onInit: function () {
            var oModel = new JSONModel({
                isVisible: false
            });
            this.getView().setModel(oModel);
        },

        onToggle: function (oEvent) {
            var bSelected = oEvent.getParameter("selected");
            this.getView().getModel().setProperty("/isVisible", bSelected);
        }

    });
});