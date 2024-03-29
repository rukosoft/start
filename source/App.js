enyo.kind({
	name : "App",
	kind : "enyo.Panels",
	classes : "onyx app-panels ",
	arrangerKind : "CollapsingArranger",
	components : [{
			name : "LeftPanel",
			kind : "enyo.FittableRows",
			components : [{
					kind : "onyx.Toolbar",
					classes : "app-toolbars",
					components : [{
							classes : "app-heading",
							style : "float: left;",
							content : "PV-logger"
						}, {
							kind : "onyx.PickerDecorator",
							style : "float: right;",
							components : [{
									kind : "onyx.PickerButton",
									style : "padding: 6px; min-width: 90px",
								}, {
									kind : "onyx.Picker",
									onSelect : "loggerChanged",
									components : [{
											active : true,
											content : "Logger 1"
										}, {
											content : "Logger 2"
										}, {
											content : "Logger 3"
										}, {
											content : "Logger 4"
										}
									]
								}
							]
						}
					]
				}, /* {
					style : "text-align: center; font-size: 16px; padding-bottom: 10px; color: grey;",
					content : "Tap a row to see its history"
				}, */ {
					kind : "Scroller",
					fit : true,
					components : [{
							kind : "Repeater",
							onSetupItem : "setupItem",
							components : [{
									name : "listItem",
									classes : "app-listitem ",
									components : [{
											name : "loggerDataItemLabel",
											tag : "span",
											style : "display: inline-block; width: 50%; color: lightgrey;"
										}, {
											tag : "span",
											style : "float: right; ",
											components : [{
													name : "loggerDataItemValue",
													tag : "span",
													style : "padding-left: 15px; padding-right: 15px; font-size: 24px;"
												}, {
													name : "loggerDataItemUnit",
													tag : "span",
													style : "display: inline-block; width: 50px; color: lightgrey;"
												}
											]
										}
									]
								}
							]
						}
					]
				}, {
					kind : "onyx.Toolbar",
					classes : "app-toolbars",
					components : [{
							name : "AccountButton",
							kind : "onyx.Button",
							ontap : "accountButtonTapped",
							classes : "app-iconbutton",
							style : "float: left;",
							components : [{
									kind : "onyx.Icon",
									src : "assets/icon-user.png"
								}, {
									classes : "app-iconbutton-caption",
									content : "Account"
								}
							]
						}, {
							name : "RefreshButton",
							kind : "onyx.Button",
							ontap : "refreshButtonTapped",
							classes : "app-iconbutton",
							style : "float: right;",
							components : [{
									kind : "onyx.Icon",
									src : "assets/icon-refresh.png"
								}, {
									classes : "app-iconbutton-caption",
									content : "Refresh"
								}
							]
						}
					]
				}
				
			]
		}, {
			name : "RightPanel",
			kind : "enyo.FittableRows",
			components : [{
					kind : "onyx.Toolbar",
					classes : "app-toolbars",
					components : [{
							classes : "app-heading",
							content : "History"
						}
					]
				}, {
					/* content area */
					fit : true,
					components : [{
							style : "text-align: center; ",
							content : "History graph"
						}
					]
				}, {
					kind : "onyx.Toolbar",
					classes : "app-toolbars",
					components : [{
							kind : "onyx.Grabber"
						}
					]
				}
				
			]
		}
	],
	
	create : function () {
		this.inherited(arguments);
		this.$.repeater.setCount(this.loggerData.length);
	},
	
	setupItem : function (inSender, inEvent) {
		var index = inEvent.index;
		var item = inEvent.item;
		var loggerDataItem = this.loggerData[index];
		item.$.loggerDataItemLabel.setContent(loggerDataItem.label);
		item.$.loggerDataItemValue.setContent(loggerDataItem.value);
		item.$.loggerDataItemUnit.setContent(loggerDataItem.unit);
	},
	
	loggerData : [{
			label : "Sunlight intensity",
			value : 1031,
			unit : "W/m²"
		}, {
			label : "Sunlight energy on solar panels (A)",
			value : 1536,
			unit : "kWh"
		}, {
			label : "Electric energy generated by solar panels (B)",
			value : 230,
			unit : "kWh"
		}, {
			label : "Solar panel efficiency (B/A)",
			value : 15,
			unit : "%"
		}, {
			label : "Solar panel temperature",
			value : 64,
			unit : "°C"
		}
	]
	
});
