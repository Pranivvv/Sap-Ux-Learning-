sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {

    "use strict";

    return Controller.extend("navigation.navigation.controller.Home", {

        onNext: function() {

            this.getOwnerComponent()
                .getRouter()
                .navTo("second");

        }

    });

});

