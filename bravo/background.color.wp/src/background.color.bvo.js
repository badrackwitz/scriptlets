(function(s) {
		var c=s.join(' ');
		var e=document.createElement('style');
		e.type='text/css';
		if(e.styleSheet)e.styleSheet.cssText=c;
		else e.appendChild(document.createTextNode(c));
		document.getElementsByTagName('head')[0].appendChild(e);
}
([
	"body { background-color:#000000; }",
	".dikr-responsive-ads-top { width:940px; text-align:right; background-color:#000000; }",
	"#wrapper { background-color: #ffffff; }"
]));
