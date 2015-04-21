(function (url) {
    (function(e){
      var t=e.join(" ");
      var n=document.createElement("style");
      n.type="text/css";
      if(n.styleSheet)n.styleSheet.cssText=t;else n.appendChild(document.createTextNode(t));

      document.getElementsByTagName("head")[0].appendChild(n);})([
        ".innerWrapper { cursor:default; }",
        "html, .dikr-responsive-ads-top { cursor:pointer; }"
      ]);
      var h=function(e){
        e=e||window.event;
        if(e){
            var t=e.target||e.srcElement;
            if(t&&(t.tagName=="html"||t.id=="html"||t.tagName=="body"||t.className=="wrapper"||(t.className.indexOf("dikr-responsive-ads-top")!==-1))){
                window.open(url);
            }
        }
    };
    document.getElementsByTagName("html")[0].onclick=h;
}(
    'http://example.org'
));