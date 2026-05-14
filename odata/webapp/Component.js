sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {

    "use strict";

    return UIComponent.extend("odata.odata.Component", {

        metadata: {
            manifest: "json"
        },

        init: function() {

            UIComponent.prototype.init.apply(this, arguments);

            // Create JSON Model
            var oModel = new JSONModel();

            // Load local data
            oModel.loadData("model/data.json");

            // Set model to app
            this.setModel(oModel);

        }

    });

});