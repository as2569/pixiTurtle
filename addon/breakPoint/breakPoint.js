//every addon has this
(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser envs
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

   CodeMirror.defineExtension("breakpoints", function(pos, options, force) {
	   console.log("7");
    onGutterClick(this, pos, options, force);
  });
  
CodeMirror.defineOption("breakpoints", false, function(cm, val, old) {
    if (old == CodeMirror.Init) old = false;
	if(val)
		cm.on("gutterClick",onGutterClick);
    if (!old == !val) return;
  });

function makeMarker() { //initially not private
  var marker = document.createElement("div");
  marker.style.color = "#822";
  marker.innerHTML = "●";
  console.log("5");
  //hasMarker = true;
  return marker;
}

function onGutterClick(cm, line, gutter) {
	console.log("4");
	var info = cm.lineInfo(line);
  cm.setGutterMarker(line, "breakpoints", info.gutterMarkers ? null : makeMarker());
	}
	

});
function hasBreakPoint(cm, line, gutter){
console.log("8");
var info = cm.lineInfo(line);
if(info.gutterMarkers==null)
	return false;
else
	return true;
}

function getLineInfo(cm,line,gutter){
	var breakPoint = hasBreakPoint(cm,line,gutter);
	var doc = cm.getDoc();
	var lineText = doc.getLine(line);
	return(lineText);
}