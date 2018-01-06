// Special file handling: NYM Spread pages named with _1-2 and partial ad pages are deleted

var PREPARE_NS = "RRD Prepare";
var normalize = function(value){
	return value?(value +""):"";
}

var pageType = normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageType"));
var pageVariant = normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageVariant"));
var customerCode = normalize($(CustomerCode));
var pageOrderName = normalize($(PageOrderName));
var nameMatch = pageOrderName.match(/(_1-2)/) ? "true":"false";
return customerCode === "NYM" && pageType === "ad" && pageVariant === "spread" && nameMatch || pageVariant === "partial";

/* debug
var sp = customerCode === "NYM" && pageType === "ad" && pageVariant === "spread" && nameMatch || pageVariant === "partial";
Context.setVariable("debug-special_handling", sp);
return sp;
*/