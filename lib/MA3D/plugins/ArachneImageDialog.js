/**
 * special plugin for the MayaArch3D-Project. Shows Images from the DAI using the Arachne Image DB.
 */

MA3D.ArachneImageViewer = function(id, containerDiv) {

	this.id = id || null ;
	this.containerDiv = containerDiv || document.body;
	
	//create DIV
	this.dialogDiv = document.createElement('div');
	this.dialogDiv.id = MA3D.idCounter++;
	this.containerDiv.appendChild(this.dialogDiv);
	
	// insert Viewer	
	imageWindowCreator = this.imageWindowCreator = new ImageWindowCreator(this.dialogDiv.id, "imageWindowCreator");
	
	//z index to be visible in smartGWT app
	// $(this.dialogDiv).dialog('widget').css({boxShadow:'2px 2px 7px rgba(0,0,0,0.5)',"z-index":'2000000'});
	$( "#" + this.imageWindowCreator.dialogID ).dialog('widget').css({boxShadow:'2px 2px 7px rgba(0,0,0,0.5)',"z-index":'2000000'});
	
	//change serviceurls
	this.imageWindowCreator.imageService = "http://www.mayaarch3d.org/imageservice/imageservice/";
	this.imageWindowCreator.imageViewer.imageServiceAdress = this.imageWindowCreator.imageService;
	//load images
	this.imageWindowCreator.setObjectID(id);
	
	
};
