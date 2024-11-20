/*global QUnit*/

sap.ui.define([
	"cl3syncyoungsdmorderchart/member_ordersum/controller/MemberOrderView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MemberOrderView Controller");

	QUnit.test("I should test the MemberOrderView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
