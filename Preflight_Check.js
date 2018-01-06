// Bypass Preflight Check

var normalize=function(value){
	return value?(value +""):"";
}

var presult = normalize(Context.getVariable("twist_presult"));
var presultBypass = presult === "OK"?Context.BYPASS_STEP:"true";

/* debug
Context.setVariable("debug-presultBypass", presultBypass);
*/

return presultBypass;