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
	'#innerPageWrapper { background-color:#ffffff; padding:8px; }',
	'body { background-color:#000000; }'
]));