sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sapui5-init.app0.controller.Main", {
      onInit: function () {
        this._oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
      },

      onPressOkBtn: function () {
        const sMessage = this._oResourceBundle.getText("MessageToast.message.okBtnPressed");
        MessageToast.show(sMessage);
      },
    });
  }
);
