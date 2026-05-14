sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("extendedcontrol.extendedcontrol.controller.FileUpload", {

        onFileChange: function (oEvent) {

            // Get selected file name
            var sFileName = oEvent.getParameter("newValue");

            // Display selected file name
            this.byId("txtFileName").setText("Selected File: " + sFileName);
        },

        onUpload: function () {

            // Get FileUploader control
            var oFileUploader = this.byId("fileUploader");

            // Check file selected
            if (oFileUploader.getValue()) {

                MessageToast.show("File Uploaded Successfully");

            } else {

                MessageToast.show("Please select a file");

            }
        }

    });
});