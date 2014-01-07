(function() {
	var styles = document.styleSheets;
	var bgImage = null;
	var bgColor = null;
	var bgRepeat = null;



	for(var i = 0; i < styles.length; i++) {
		var style = styles[i];
		var rules;
		//console.dir(style.cssRules);
		try { rules = style.rules || style.cssRules;} catch(err){continue;}
		if(rules) {

			for(var x = 0; x < rules.length; x++) {
				var rule = rules[x];
				if(((rule.selectorText == 'body, .body_css_rules') || (rule.selectorText == '.body_css_rules')) && rule.style.backgroundImage) {
					bgImage = rule.style.backgroundImage;
				}

				if(((rule.selectorText == 'body, .body_css_rules') || (rule.selectorText == '.body_css_rules')) && rule.style.backgroundColor) {
					bgColor = rule.style.backgroundColor;
				}

				if(((rule.selectorText == 'body, .body_css_rules') || (rule.selectorText == '.body_css_rules')) && rule.style.backgroundRepeat) {
					bgRepeat = rule.style.backgroundRepeat;
				}
			}
		}
	}
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
			"#tp_48 {background-image: "+bgImage+"; background-position:0 -91px;background-color:"+bgColor+";padding-bottom:14px;background-repeat: "+bgRepeat+"}",
			".qhjje31{height:0px;}", ".n68m6o4{margin-top:0px !important;}",
			"body { background-image: none;}",
			"#tp_48, .qhjje31, .tps_brjewjw8, #toolbar_expd_bravo_toolbar {width:1087px !important}",
			".tps_dvwt9d5r {width:1071px;}",
			"body { background-color:#000000; }"
		])
	);
})();

