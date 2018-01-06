var PREPARE_NS = "RRD Prepare";
var normalize=function(value){
	return value?(value +""):"";
}

// twist variable: wflFunction

if (normalize(Context.getVariable("wflsplit")) === "true") {
	Context.setVariable("wflFunction","preflight");
} else if ((normalize(Context.getMetaData("PageOrder", PREPARE_NS, "pageType"))) !== "sma") {
	wflFunction = ((normalize(Context.getMetaData("Job", PREPARE_NS,
			"preflightPrecheck"))) === "true") ? "preflight" : "ignore";
	Context.setVariable("wflFunction", wflFunction);
} else {
	wflFunction = ((normalize(Context.getMetaData("Job", PREPARE_NS,
			"preflightAd"))) === "true") ? "preflight" : "ignore";
	Context.setVariable("wflFunction", wflFunction);
}

// twist variable: preflightCheckSize

var preflightCheckSize = (normalize(Context.getMetaData("FileBag",PREPARE_NS,"overrideCheckPageSize")) === "true") ? "false" : Context.getMetaData("Job",PREPARE_NS,"preflightCheckSize");
Context.setVariable("preflightCheckSize",preflightCheckSize);

// twist variable: preflightCheckSizeWD

var preflightCheckSizeWD = (normalize(Context.getMetaData("FileBag",PREPARE_NS,"overrideCheckPageSize")) === "true") ? " ": Context.getMetaData("Job",PREPARE_NS,"pageTrimWidth");
Context.setVariable("preflightCheckSizeWD",preflightCheckSizeWD);

// twist variable: preflightCheckSizeHT

var preflightCheckSizeHT = (normalize(Context.getMetaData("FileBag",PREPARE_NS,"overrideCheckPageSize")) === "true") ? " ": Context.getMetaData("Job",PREPARE_NS,"pageTrimHeight");
Context.setVariable("preflightCheckSizeHT",preflightCheckSizeHT);

// twist variable: outputAllowSpot

var smaColorProfile = normalize(Context.getMetaData("PageOrder", "sma", "ColorProfile"))==="Spot";
var outputAllowSpot = normalize(smaColorProfile) === "true" ? "true": normalize(Context.getMetaData("PageOrder",PREPARE_NS,"outputAllowSpot")) === "true" ? "true" : Context.getMetaData("FileBag",PREPARE_NS,"outputAllowSpot");
Context.setVariable("outputAllowSpot",outputAllowSpot);

