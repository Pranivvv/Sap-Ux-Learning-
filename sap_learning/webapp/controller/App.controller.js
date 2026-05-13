sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend(
        "saplearning.saplearning.controller.App",
    {
        onDisplay: function () {
            // Read values
            var sName =
                this.byId("empName").getValue();
            var sId =
                this.byId("empId").getValue();

            // Validation
            if (!sName || !sId) {
                MessageToast.show(
                    "Please enter all details"
                );

                return;
            }

            // Create message
            var sOutput =
                "Employee Name: " + sName +
                " | Employee ID: " + sId;

            // Display output
            this.byId("resultText")
                .setText(sOutput);

            // Toast Message
            MessageToast.show(
                "Data Displayed Successfully"
            );
        }
    });
});