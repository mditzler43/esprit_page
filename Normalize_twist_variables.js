var PREPARE_NS = "RRD Prepare";
var normalize=function(value){
	return value?(value +""):"";
}

// twist variable: wflFunction

if (normalize(Context.getVariable("wflsplit")) === "true") {
	Context.setVariable("wflFunction","normalize");
} else if ((normalize(Context.getMetaData("PageOrder", PREPARE_NS, "pageType"))) === "sma") {
	Context.setVariable("wflFunction", "ignore");
} else {
	Context.setVariable("wflFunction", "normalize");
}

// twist variable: preflightCheckSize

var preflightCheckSize = (normalize(Context.getMetaData("Job",PREPARE_NS,"preflightPrecheck")) === "true") ? "false" : normalize(Context.getMetaData("FileBag",PREPARE_NS,"overrideCheckPageSize")) === "true"? "false": (Context.getMetaData("Job","RRD Prepare", "preflightCheckSize"));
Context.setVariable("preflightCheckSize",preflightCheckSize);

// twist variable: preflightCheckSizeWD

var preflightCheckSizeWD = (normalize(Context.getMetaData("FileBag",PREPARE_NS,"overrideCheckPageSize")) === "true") ? " ": Context.getMetaData("Job",PREPARE_NS,"pageTrimWidth");
Context.setVariable("preflightCheckSizeWD",preflightCheckSizeWD);

// twist variable: preflightCheckSizeHT

var preflightCheckSizeHT = (normalize(Context.getMetaData("FileBag",PREPARE_NS,"overrideCheckPageSize")) === "true") ? " ": Context.getMetaData("Job",PREPARE_NS,"pageTrimHeight");
Context.setVariable("preflightCheckSizeHT",preflightCheckSizeHT);

//twist variable: preflightCTRes

var preflightCTRes = (normalize(Context.getMetaData("Job",PREPARE_NS,"preflightPrecheck")) === "true") ? "0" : Context.getMetaData("Job", "RRD Prepare", "preflightCTRes");
Context.setVariable("preflightCTRes",preflightCTRes);

//twist variable: preflightLWRes

var preflightLWRes = (normalize(Context.getMetaData("Job",PREPARE_NS,"preflightPrecheck")) === "true") ? "0" : Context.getMetaData("Job", "RRD Prepare", "preflightLWRes");
Context.setVariable("preflightLWRes",preflightLWRes);

// twist variable: outputAllowSpot

var smaColorProfile = normalize(Context.getMetaData("PageOrder", "sma", "ColorProfile"))==="Spot";
var outputAllowSpot = normalize(smaColorProfile) === "true" ? "true": normalize(Context.getMetaData("PageOrder",PREPARE_NS,"outputAllowSpot")) === "true" ? "true" : Context.getMetaData("FileBag",PREPARE_NS,"outputAllowSpot");
Context.setVariable("outputAllowSpot",outputAllowSpot);

//twist variable:  normalizePageSize for NYM

var normalizePageSize = normalize($(CustomerCode)) === "NYM";
Context.setVariable("normalizePageSize",normalizePageSize);

