sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
     "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("saplearning.saplearning.controller.App1", {
        onInit: function () {

            var oData = {
                buttonText: "Click Me"
            };

            var oModel = new JSONModel(oData);

            this.getView().setModel(oModel);
        },

        onButtonPress: function () {
            var oModel = this.getView().getModel();
            
            console.log(oModel)
            var sCurrentText = oModel.getProperty("/buttonText");

            if (sCurrentText === "Click Me") {
                oModel.setProperty("/buttonText", "Clicked!");
            } else{
                oModel.setProperty("/buttonText", "Click Me");
            }

            MessageToast.show("Button pressed");
        }
    });
});


// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//     "sap/ui/model/json/JSONModel"
// ], function (Controller, MessageToast, JSONModel) {
//     "use strict";

//     return Controller.extend("demo.firstproject.firstproject.controller.App1"),{
//         onInit: function(){
//             var oData = {buttonText: "Click Me"};
//             var oModel = new JSONModel(oData);
//             this.getView().setModel(oModel);
//             }

            
//         },
//         onButtonPress: function () {
//             var oModel = this.getView().getModel();
//             var sCurrentText = oModel.getProperty("/buttonText");

//             if (sCurrentText === "Click Me") {
//                 oModel.setProperty("/buttonText", "Clicked!");
//             } else {
//                 oModel.setProperty("/buttonText", "Click Me");
//             }

//             MessageToast.show("Button pressed");
//         }
//     });
// });