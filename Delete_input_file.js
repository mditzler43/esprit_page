// Set Delete Step

var PREPARE_NS = "RRD Prepare";
var normalize=function(value){
	return value?(value +""):"";
}

var customerCode=normalize($(CustomerCode));
var splitDelete=normalize(Context.getMetaData("Customer",PREPARE_NS,"pageSplitDeleteOriginal"));
var pageVariant=normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageVariant"));

if (customerCode === "NYM" ){
	return "true";
	} else if (pageVariant === "spread" && splitDelete === "true"){
	return "true";
} else {
	return Context.BYPASS_STEP;
}