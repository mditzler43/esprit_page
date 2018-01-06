// Set storage folder for non full page files input into the system

var PREPARE_NS = "RRD Prepare";
var normalize=function(value){
	return value?(value +""):"";
}

var pageType=normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageType"));
var pageVariant=normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageVariant"));
var dir =  "Ads" + "/" + pageVariant.charAt(0).toUpperCase() + pageVariant.slice(1,pageVariant.length); // directory for Send My Ad files
Context.setVariable("ad_dir",dir); // Capitalizes first letter of directory, setting variable to be used in Input file storage step
return (pageType !== "ad")?"true":Context.BYPASS_STEP;