sap.ui.define(["sap/ui/core/UIComponent", "sap/m/Button"], function (UIComponent, Button) {
  "use strict";

  return UIComponent.extend("sapui5-init.app5.Component", {
    metadata: {
      interfaces: ["sap.ui.core.IAsyncContentCreation"],
      manifest: "json",
    },

    createContent: function () {
      return new Button({ text: "Ok" });
    },
  });
});
