// SMA auto split

var PREPARE_NS = "RRD Prepare";
var normalize=function(value){
	return value?(value +""):"";
}

return normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageVariant"))==="spread" && normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageType"))==="sma";

/* debug
var split = normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageVariant"))==="spread" && normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageType"))==="sma";
Context.setVariable("debug-split", split);
return split;
*/