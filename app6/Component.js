sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/core/mvc/XMLView"],
  function (UIComponent, XMLView) {
    "use strict";

    return UIComponent.extend("sapui5-init.app6.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },

      createContent: function () {
        return XMLView.create({ viewName: "sapui5-init.app6.view.App" });
      },
    });
  }
);
