function jAdInitBackground() {
 document.getElementsByTagName('body')[0].style.backgroundColor = '#C0C0C0';
 document.getElementsByTagName('body')[0].style.cursor = 'pointer';
 document.getElementById('page').style.cursor = 'default';
 document.getElementsByTagName('body')[0].onclick = jAdBackgroundClickHandler;
}
function jAdBackgroundClickHandler(event) {
 event = event ? event : window.event;
 if(event) {
  var target = event.target ? event.target : event.srcElement;
  if(target) {
   if(target.tagName == 'BODY' || target.id == 'adlytics-adtags-top' || target.id == 'banner-region' || target.id == 'skyscraper-region' || target.id == 'page_margins') {
    window.open('http://example.org');
   }
  }
 }
}
window.onload = jAdInitBackground;