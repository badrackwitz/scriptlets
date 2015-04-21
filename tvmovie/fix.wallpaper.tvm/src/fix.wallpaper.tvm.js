(
	function(s) {
		var c=s.join(' ');
		var e=document.createElement('style');
		e.type='text/css';
		if(e.styleSheet)e.styleSheet.cssText=c;
		else e.appendChild(document.createTextNode(c));
		document.getElementsByTagName('head')[0].appendChild(e);
	}
	([
		"div.adRow.dikr-responsive-ads-top {text-align: right !important;}"
	])
);