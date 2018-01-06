/**
 * 
 * 
 * 
 * NOTES

legacy
$(MetaData/pubFlder)	(image workflow)
$(MetaData/dateFlder)	(image workflow)
$(MetaData/pdfFolder)
$(MetaData/pdfName)
$(MetaData/webpdfFolder)
$(MetaData/ftp_dir)
$(MetaData/deliveryFolder)
$(MetaData/deliveryName)


enterprise
$(MetaData/deliveryEntId)
$(MetaData/publication)
$(MetaData/outputType)
$(MetaData/dateFlder)
$(MetaData/project)
 */


/**************************************** Set Workflow Metadata ****************************************/

// Functions
var normalize = function(value) {
	return value ? (value + "") : "";
}

// Constants
var PREPARE_NS = "RRD Prepare";
var SMA_NS = "sma";

// Variables
var fb_pageType = Context.getMetaData("FileBag", PREPARE_NS, "pageType");
var fb_pageVariant = Context.getMetaData("FileBag", PREPARE_NS, "pageVariant");
var smaCode = Context.getMetaData("PageOrder", SMA_NS, "AdSpecCode");
var smaID = Context.getMetaData("PageOrder", SMA_NS, "ProcessId");
var dir = normalize($(Folder));

// Determines if spread page was split into single files. wflsplit variable will be used in eTwist Workflow: PRE_PAGEFLOW_MAIN to set wflFunction variable
var wflsplit = ((Context.getMetaData("PageOrder","pdf","Keywords")!=null)&&(normalize(Context.getMetaData("PageOrder","pdf", "Keywords"))==="split")) || ((Context.getMetaData("PageOrder","PDF Producer","Keywords")!=null)&&(normalize(Context.getMetaData("PageOrder","PDF Producer", "Keywords"))==="split")) ; 
Context.setVariable("wflsplit",wflsplit);

// Set Page Type
var pageType = fb_pageType != "ns" ? fb_pageType : smaID != null ? "sma" : (dir && dir != "" && dir.match(/\/AD.*/i)) ? "ad" : "default";
Context.setMetaData("PageOrder", PREPARE_NS, "pageType", pageType);

// Set Page Variant
if (wflsplit) {
	pageVariant = "fullpage";
} else if (fb_pageVariant != "ns") {
	pageVariant = fb_pageVariant;
} else if (smaCode && smaCode != "") {
	pageVariant = smaCode.match(/(FP|BB)/) ? "fullpage" : smaCode.match(/(MSP)/) ? "manual" : smaCode.match(/(SP)/) ? "spread" : "partial";
} else if (dir.match(/(\/AD.*)/i)) {
	pageVariant = dir.match(/gatefold/i) ? "gate" : dir.match(/full/i)?"fullpage" : dir.split("/").pop().toLowerCase();
} else {
	pageVariant = "fullpage";
}
Context.setMetaData("PageOrder", PREPARE_NS, "pageVariant", pageVariant);

// Set Publication Name without legacy customer code prefix
Context.setMetaData("PageOrder", PREPARE_NS, normalize($(CustomerName)).replace(/([^-]+)[\-]/, ""));

//Set Short Project Name without legacy suffix
Context.setMetaData("PageOrder", PREPARE_NS, "project",normalize($(ProjectName)).replace(/_(BB|BDY|CVR|CVWP|INS|VF_(.+))/, "").replace(/\ /g, ""));

// Set FTP sub dir for NYM
if (dir.match(/(\/AD.*)/i)) {
	if (dir.match(/(marketplace\/partial)/i)) {
		ftp_dir = "marketplace/partial";
	} else if (dir.match(/gatefold/i)) {
		ftp_dir = "gate";
	} else if (dir.match(/full/i)){
		ftp_dir = "fullpage";
	} else {
		ftp_dir = dir.split("/").pop();
	}
	Context.setMetaData("PageOrder",PREPARE_NS,"ftp_dir", ftp_dir.toLowerCase());
} else {
	Context.setMetaData("PageOrder",PREPARE_NS,"ftp_dir", pageVariant.toLowerCase());
}

// Set output channel metadatas
Context.setMetaData("","deliveryEntId",Context.getMetaData("Customer", PREPARE_NS, "deliveryEntId"));
Context.setMetaData("","publication",Context.getMetaData("PageOrder", PREPARE_NS, "publication"));
Context.setMetaData("","project",Context.getMetaData("PageOrder", PREPARE_NS, "project"));
Context.setMetaData("","variant",Context.getMetaData("PageOrder", PREPARE_NS, "pageVariant"));
Context.setMetaData("","ftp_dir",Context.getMetaData("PageOrder", PREPARE_NS, "ftp_dir"));