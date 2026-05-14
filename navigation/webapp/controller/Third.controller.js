sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {

    "use strict";

    return Controller.extend("navigation.navigation.controller.Third", {

        onBack: function() {

            this.getOwnerComponent()
                .getRouter()
                .navTo("home");

        }

    });

});