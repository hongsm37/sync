/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cl3syncyoungsdmorderchart/member_ordersum/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
