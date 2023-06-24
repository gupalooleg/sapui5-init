sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";

  return UIComponent.extend("sapui5-init.app0.Component", {
    metadata: {
      interfaces: ["sap.ui.core.IAsyncContentCreation"],
      manifest: "json",
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
    },
  });
});
