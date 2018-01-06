// SMA manual split

var PREPARE_NS = "RRD Prepare";
var normalize=function(value){
	return value?(value +""):"";
}
return normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageVariant"))==="manual" && normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageType"))==="sma";


/* debug
var ms = normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageVariant"))==="manual" && normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageType"))==="sma";
Context.setVariable("debug-ms", ms);
return ms;
*/