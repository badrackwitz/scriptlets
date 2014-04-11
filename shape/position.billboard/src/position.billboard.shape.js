(function(s) {
	var css = s.join(' ');

	var styleElement = document.createElement('style');
	styleElement.type = 'text/css';
	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	}
	else {
		styleElement.appendChild(document.createTextNode(css));
	}

	document.getElementsByTagName('head')[0].appendChild(styleElement);
}([
	"#innerPageWrapper > ins { margin-left:-8px;margin-top:10px; }",
    "#navWrapper > ins { margin-left:-8px;margin-top:26px; }"
]));