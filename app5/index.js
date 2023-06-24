sap.ui.define(["sap/ui/core/ComponentContainer"], function (ComponentContainer) {
  "use strict";

  new ComponentContainer({
    name: "sapui5-init.app5",
    manifest: true,
    async: true,
  }).placeAt("content");
});
