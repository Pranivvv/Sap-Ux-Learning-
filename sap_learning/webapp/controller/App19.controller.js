sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/NumberFormat"
], function (Controller, NumberFormat) {
    "use strict";

    return Controller.extend("saplearning.saplearning.controller.App19", {
        onShowAmount: function () {
            var oText = this.byId("currencyText");

            var fAmount = 12345.67;

            var oCurrencyFormatter = NumberFormat.getCurrencyInstance({
                currencyCode: true
            });

            var sFormatted = oCurrencyFormatter.format(fAmount, "INR");

            oText.setText(sFormatted);
        }
    });
});