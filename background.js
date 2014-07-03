chrome.browserAction.onClicked.addListener(function(tab) {
	console.log("spinnifying divs in " + tab.url);
	
	chrome.tabs.insertCSS(tab.id, {
		file: "css/spin.css"
	});
});