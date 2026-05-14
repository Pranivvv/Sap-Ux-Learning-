sap.ui.define([
    "sap/m/Button",
    "sap/m/ButtonRenderer"
], function(Button, ButtonRenderer) {

    "use strict";

    return Button.extend("demo.extend.extendcontrol.control.MyButton", {

        metadata: {

            properties: {

                customText: {
                    type: "string",
                    defaultValue: "Click"
                }

            }

        },

        renderer: ButtonRenderer,

        onAfterRendering: function() {

            this.setText("Custom : " + this.getCustomText());

        }

    });

});

