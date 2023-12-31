sap.ui.define(["sap/base/util/ObjectPath", "sap/ushell/services/Container"], function (ObjectPath) {
  "use strict";

  // define ushell config
  ObjectPath.set(["sap-ushell-config"], {
    defaultRenderer: "fiori2",
    bootstrapPlugins: {
      RuntimeAuthoringPlugin: {
        component: "sap.ushell.plugins.rta",
        config: {
          validateAppVersion: false,
        },
      },
      PersonalizePlugin: {
        component: "sap.ushell.plugins.rta-personalize",
        config: {
          validateAppVersion: false,
        },
      },
    },
    renderers: {
      fiori2: {
        componentData: {
          config: {
            enableSearch: false,
            rootIntent: "Shell-home",
          },
        },
      },
    },
    services: {
      LaunchPage: {
        adapter: {
          config: {
            groups: [
              {
                tiles: [
                  {
                    tileType: "sap.ushell.ui.tile.StaticTile",
                    properties: {
                      title: "App with FLP sandbox",
                      targetURL: "#app0-display",
                    },
                  },
                ],
              },
            ],
          },
        },
      },
      ClientSideTargetResolution: {
        adapter: {
          config: {
            inbounds: {
              "app0-display": {
                semanticObject: "app0",
                action: "display",
                description: "App with FLP sandbox(description)",
                title: "App with FLP sandbox",
                signature: {
                  parameters: {},
                },
                resolutionResult: {
                  applicationType: "SAPUI5",
                  additionalInformation: "SAPUI5.Component=sapui5-init.app0",
                  url: sap.ui.require.toUrl("sapui5-init/app0"),
                },
              },
            },
          },
        },
      },
      NavTargetResolution: {
        config: {
          enableClientSideTargetResolution: true,
        },
      },
    },
  });

  const oFlpSandbox = {
    init: function () {
      /**
       * Initializes the FLP sandbox
       * @returns {Promise} a promise that is resolved when the sandbox bootstrap has finished
       */

      // sandbox is a singleton, so we can start it only once
      if (!this._oBootstrapFinished) {
        this._oBootstrapFinished = sap.ushell.bootstrap("local");
        this._oBootstrapFinished.then(function () {
          sap.ushell.Container.createRenderer("", true).then(function (oControl) {
            oControl.placeAt("content");
          });
        });
      }

      return this._oBootstrapFinished;
    },
  };

  return oFlpSandbox;
});
