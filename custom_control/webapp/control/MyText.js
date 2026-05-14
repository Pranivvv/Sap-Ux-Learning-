sap.ui.define([
    "sap/ui/core/Control"
], function(Control) {
    "use strict";

    return Control.extend("demo.custom.customcontrol.control.MyText", {

        metadata: {
            properties: {
                text: {
                    type: "string",
                    defaultValue: "Default Text"
                }
            }
        },

        renderer: function(oRm, oControl) {

            oRm.openStart("div", oControl);
            oRm.style("border", "2px solid #0070f2");
            oRm.style("padding", "15px");
            oRm.style("margin", "10px");
            oRm.style("border-radius", "8px");
            oRm.openEnd();

            oRm.text(oControl.getText());

            oRm.close("div");
        }

    });
});


