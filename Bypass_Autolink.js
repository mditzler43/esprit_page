// Bypass Autolink step

var PREPARE_NS = "RRD Prepare";
var normalize=function(value){
	return value?(value +""):"";
}

var pageType = normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageType"));
var pageVariant = normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageVariant"));

return pageType === "default" && pageVariant === "fullpage" ? "true":Context.BYPASS_STEP;
