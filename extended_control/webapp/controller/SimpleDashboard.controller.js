sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("extendedcontrol.extendedcontrol.controller.SimpleDashboard", {

        onInit: function () {

            // Create JSON data
            var oData = {
                users: 150,
                orders: 75,
                revenue: 25
            };

            // Create model
            var oModel = new JSONModel(oData);

            // Set model to view
            this.getView().setModel(oModel);
        }

    });
});