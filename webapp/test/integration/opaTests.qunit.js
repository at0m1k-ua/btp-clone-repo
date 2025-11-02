/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["sap/btp/helloworldclone/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
