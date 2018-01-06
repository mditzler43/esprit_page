var PREPARE_NS = "RRD Prepare";
var normalize = function(value){
	return value?(value +""):"";
}

var pageType = normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageType"));
var approvalColor = normalize(Context.getMetaData("Customer",PREPARE_NS,"approvalColor"));
var approvalAdColor = normalize(Context.getMetaData("Customer",PREPARE_NS,"approvalAdColor"));

var colorApproval = pageType !=="default" ? approvalAdColor : approvalColor;
Context.setVariable("colorApproval",colorApproval);

return normalize(colorApproval)!=="true" ? Context.BYPASS_STEP:"true";


