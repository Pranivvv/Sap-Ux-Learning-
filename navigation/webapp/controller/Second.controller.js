sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {

    "use strict";

    return Controller.extend("navigation.navigation.controller.Second", {

        onNext: function() {

            this.getOwnerComponent()
                .getRouter()
                .navTo("third");

        },

        onBack: function() {

            this.getOwnerComponent()
                .getRouter()
                .navTo("home");

        }

    });

});
