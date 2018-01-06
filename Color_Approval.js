var normalize = function(value){
	return value?(value +""):"";
}

return normalize(Context.getVariable("colorApproval"))==="true" ? "true" : Context.BYPASS_STEP;
