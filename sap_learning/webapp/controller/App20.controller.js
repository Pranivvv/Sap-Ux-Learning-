sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("saplearning.saplearning.controller.App20", {

        onInit: function () {
        },

        // ✅ Main submit handler
        onSubmit: function () {

            let isValid = true;

            let oName = this.byId("rName");
            let oSurname = this.byId("rSurname");
            let oPhone = this.byId("rPhoneNumber");
            let oEmail = this.byId("rEmail");
            let oAddress = this.byId("rAddress");
            let oGender = this.byId("rSelectButtons");
            let oCountry = this.byId("rCountry");

            // Reset states
            this._resetValidation([oName, oSurname, oPhone, oEmail, oAddress, oCountry]);

            // ✅ Name validation
            if (!oName.getValue()) {
                oName.setValueState("Error");
                oName.setValueStateText("Name is required");
                isValid = false;
            }

            // ✅ Surname validation
            if (!oSurname.getValue()) {
                oSurname.setValueState("Error");
                oSurname.setValueStateText("Surname is required");
                isValid = false;
            }

            // ✅ Phone validation (10 digits)
            let phone = oPhone.getValue();
            let phoneRegex = /^[0-9]{10}$/;

            if (!phone || !phoneRegex.test(phone)) {
                oPhone.setValueState("Error");
                oPhone.setValueStateText("Enter valid 10-digit phone number");
                isValid = false;
            }

            // ✅ Email validation
            let email = oEmail.getValue();
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email || !emailRegex.test(email)) {
                oEmail.setValueState("Error");
                oEmail.setValueStateText("Enter valid email address");
                isValid = false;
            }

            // ✅ Address validation
            if (!oAddress.getValue()) {
                oAddress.setValueState("Error");
                oAddress.setValueStateText("Address is required");
                isValid = false;
            }

            // ✅ Gender validation
            if (oGender.getSelectedIndex() === -1) {
                MessageToast.show("Please select gender");
                isValid = false;
            }

            // ✅ Country validation
            if (!oCountry.getSelectedKey()) {
                oCountry.setValueState("Error");
                oCountry.setValueStateText("Select a country");
                isValid = false;
            }

            // ✅ Final Check
            if (isValid) {
                MessageBox.success("Registration Successful!");
                this._clearForm();
            } else {
                MessageBox.error("Please fix validation errors");
            }
        },


        // ✅ Reset all fields
        _resetValidation: function (fields) {
            fields.forEach(function (field) {
                field.setValueState("None");
            });
        },

        // ✅ Clear form after success
        _clearForm: function () {

            this.byId("rName").setValue("");
            this.byId("rSurname").setValue("");
            this.byId("rPhoneNumber").setValue("");
            this.byId("rEmail").setValue("");
            this.byId("rAddress").setValue("");
            this.byId("rSelectButtons").setSelectedIndex(-1);
            this.byId("rCountry").setSelectedKey("");
        }

    });
});