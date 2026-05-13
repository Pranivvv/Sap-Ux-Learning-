sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("saplearning.saplearning.controller.App15", {
        onPressBusyButton: function () {
            var oButton = this.byId("busyBtn");

            oButton.setBusy(true);
            oButton.setEnabled(false);

            setTimeout(function () {
                oButton.setBusy(false);
                oButton.setEnabled(true);
            }, 3000);
        }
    });
});