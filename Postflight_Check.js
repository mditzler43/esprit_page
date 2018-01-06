// Bypass Postflight check

var PREPARE_NS = "RRD Prepare";
var normalize=function(value){
	return value?(value +""):"";
}

var pageType = normalize(Context.getMetaData("PageOrder",PREPARE_NS,"pageType"));
var preflightAd = normalize(Context.getMetaData("Job",PREPARE_NS,"preflightAd"));
var presult = normalize(Context.getVariable("twist_presult"));

if (presult==="OK") {
	return Context.BYPASS_STEP;
} else {
	var smaBypass = (pageType === "sma" && (preflightAd));
	Context.setVariable("smaBypass", smaBypass);
	return smaBypass ? Context.BYPASS_STEP:"true";
}

// Bypass Check Postflight for SMA files

return Context.getVariable("smaBypass")+""==="true"? Context.BYPASS_STEP:"true";
