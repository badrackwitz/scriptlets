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
	'#global { margin:0; padding:3px 7px 20px 17px; background-image:url(http://www.wunderweib.de/media/img/bg_body_women.png); background-repeat:repeat-x; background-position:0 -90px; background-color:#edebe8; }',
	'body { background-color:#000000; background-image:none; }'
]));