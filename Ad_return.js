// Ad Return

var PREPARE_NS = "RRD Prepare";

var returnAd = Context.getMetaData("Customer",PREPARE_NS,"returnAd")+"";
var pageType = Context.getMetaData("PageOrder",PREPARE_NS, "pageType")+"";
return pageType!=="default"&&returnAd==="true"?"true":Context.BYPASS_STEP;

/* debug
var adReturn = (pageType!=="default"&&returnAd==="true"?"true":Context.BYPASS_STEP);
Context.setVariable("debug-adReturn", adReturn);
return adReturn;
*/