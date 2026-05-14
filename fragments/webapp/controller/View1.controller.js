sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], function (Controller, Fragment) {

    "use strict";

    return Controller.extend("fragments.fragments.controller.View1", {

        onOpenFragment: function () {
            var oView = this.getView();

            if (!this.pDialog) {
                this.pDialog = Fragment.load({
                    id: oView.getId(),
                    // ✅ Corrected namespace: matches webapp/fragment/Dialog.fragment.xml
                    name: "fragments.fragments.fragment.Dialog",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this.pDialog.then(function (oDialog) {
                oDialog.open();
            });
        },

        onCloseDialog: function () {
            this.byId("myDialog").close();
        }

    });
});