sap.ui.jsview("zui_ui5_crm_large_account_frontpage.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zui_ui5_crm_large_account_frontpage.main
	*/ 
	getControllerName : function() {
		return "zui_ui5_crm_large_account_frontpage.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zui_ui5_crm_large_account_frontpage.main
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			]
		});
	}

});