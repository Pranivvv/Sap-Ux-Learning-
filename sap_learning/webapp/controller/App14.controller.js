sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, JSONModel, ValueState, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("saplearning.saplearning.controller.App12", {

        onInit: function () {
            var oModel = new JSONModel({
                name: "",
                email: ""
            });
            this.getView().setModel(oModel);
        },

        onInputChange: function (oEvent) {
            var oInput = oEvent.getSource();
            oInput.setValueState(ValueState.None);
            oInput.setValueStateText("");
        },

        onValidate: function () {
            var oNameInput = this.byId("nameInput2");
            var oEmailInput = this.byId("emailInput2");

            var sName = (oNameInput.getValue() || "").trim();
            var sEmail = (oEmailInput.getValue() || "").trim();
            var bEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sEmail);
            var bValid = true;

            oNameInput.setValueState(ValueState.None);
            oNameInput.setValueStateText("");
            oEmailInput.setValueState(ValueState.None);
            oEmailInput.setValueStateText("");

            if (!sName) {
                oNameInput.setValueState(ValueState.Error);
                oNameInput.setValueStateText("Name is required");
                bValid = false;
            } else {
                oNameInput.setValueState(ValueState.Success);
                oNameInput.setValueStateText("Valid name");
            }

            if (!sEmail) {    
                oEmailInput.setValueState(ValueState.Error);
                oEmailInput.setValueStateText("Email is required");
                bValid = false;
            } else if (!bEmailValid) {
                oEmailInput.setValueState(ValueState.Error);
                oEmailInput.setValueStateText("Enter a valid email");
                bValid = false;
            } else {
                oEmailInput.setValueState(ValueState.Success);
                oEmailInput.setValueStateText("Valid email");
            }

            if (!bValid) {
                if (!sName) {
                    oNameInput.focus();
                } else {
                    oEmailInput.focus();
                }
                MessageBox.error("Please fix the highlighted fields.");
                return;
            }

            MessageToast.show("All fields are valid");
        }

    });
});