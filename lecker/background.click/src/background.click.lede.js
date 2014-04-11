(function(url) {
	(function(e){var t=e.join(" ");var n=document.createElement("style");n.type="text/css";if(n.styleSheet)n.styleSheet.cssText=t;else n.appendChild(document.createTextNode(t));document.getElementsByTagName("head")[0].appendChild(n);})
	(["#global { cursor:default; }","html, body { cursor:pointer; }"]);var h=function(e){e=e||window.event;if(e){
		var t=e.target||e.srcElement;
		if(t&&(t.tagName=="BODY"||t.tagName=="body" || t.id == "superbanner" || t.id == "hbv_skyscraper")){
			window.open(url);
		}
	}};document.getElementsByTagName("body")[0].onclick=h;
}(
	'http://example.org'
));