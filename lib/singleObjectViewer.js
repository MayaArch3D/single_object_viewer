// needs jQuery-UI CSS Theme
// needs singleObjectViewer CSS <link rel="stylesheet" href="css/singleObjectViewer.css" />
// needs JQuery tested with 1.9.1 <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
// needs Jquery-UI tested with 1.10.3 
// needs THREE.js tested with r58
// needs GIScene.js tested with 0.0.5

/**
 * @method initSingleObjectViewer
 * @param {HtmlDIVElement} containerDiv where the viewer fill be fitted in
 * @param {URLString} modelURL the url from where to load the model
 * @param {String} format the format of the model ( "json" | "scene" | "ctm" )
 * @param {String} verticalAxis ( "y" | "z")
 * @param {Boolean} georef if the model is georeferenced show compass and camera position
 * @param {Boolean} segmented if the model is segmented into a hierarchy in the scenegraph a special Get Feature Info UI will be used to select parts or groups of the model and retrieve attribute information from a attribute service 
 * 
 * if url, format not specified params will be searched in the url of the embedding website
 */

var MA3D = {};	
	MA3D.NavigationControl = function(camera, domElement, scene) {
		
		// GIScene.Control.call( this );
		
		var modes= ["OrbitZoomPan", "Trackball"];
		var activeMode = "OrbitZoomPan";
		var isActive = false;
		this.controls = [];
		
		
		this.addControls = function() {
			for (var i=0,l=modes.length;i<l;i++){
				this.controls[i] = new GIScene.Control[modes[i]](camera, domElement);
				scene.addControl(this.controls[i]);
			}
		};
	
		this.setMode = function(mode) {
			if(isActive){
				this.deactivate();
				activeMode = mode;
				this.activate();
			}
			else {
				activeMode = mode;
			}		
		};
		
		this.activate = function() {
			isActive = true;
			var modeIndex = modes.indexOf(activeMode);
			this.controls[modeIndex].activate();
		};
		this.deactivate = function() {
			isActive = false;
			var modeIndex = modes.indexOf(activeMode);
			this.controls[modeIndex].deactivate();
		};
		
		//init
		this.addControls();
		this.setMode(activeMode);
	};
	
	MA3D.AttributeService = function(config) {
		
		if(config){
			this.url = config.url || null;
		}
		 
		
		var request = function(config) {
			if(this.url){
				var requestType = config.requestType; //short, more, all
			
				var url = this.url.trim().replace(/\/*$/,"/") + requestType + "/" + config.id;
				
				var xhr = new XMLHttpRequest();
				xhr.open('GET',url);
				xhr.onload = config.onSuccess;
				xhr.onerror = config.onError;
				xhr.send(null);
			}
			else{
				console.log("No url specified for attribute service.");
			}
			
		}.bind(this);
		
		this.requestShortAttributes = function(id, onSuccess, onError) {
			var config = {
				requestType:'short',
				id:id,
				onSuccess:onSuccess,
				onError:onError
			};
			
			request(config);
		};
		
		this.requestMoreAttributes = function(id, onSuccess, onError) {
			var config = {
				requestType:'more',
				id:id,
				onSuccess:onSuccess,
				onError:onError
			};
			
			this.request(config);
		};
		
		this.requestAllAttributes = function(id, onSuccess, onError) {
			var config = {
				requestType:'all',
				id:id,
				onSuccess:onSuccess,
				onError:onError
			};
			
			this.request(config);
		};
		
	};
	
	MA3D.SelectSegmentedModel = function(sov) {
		this.getParentNodes = function(object) {
			var nodesArray = [];
			
			do{
				nodesArray.push(object);
				object = (object.parent) ? object.parent : null;
			}
			while(object && (object.name != 'group' && !(object.name.match(/^layer/))));
			
			return nodesArray;
		};
		
		this.deleteGui = function() {
			var container = $('#select_output_container > .sovSelectSegmentedContainer');
			if(container.length > 0) {container.remove();}
		};
		
		
		this.createAttributeList = function(element, attrId) {
			var filemakerId = attrId;
			var onSuccess = function(response) {
				$(element).removeClass('sovLoading');
				//just for testing
				var attributes = {"Attribute 1" : "Value 1","Attribute 2" : "Value 2","Attribute 3" : "Value 3"}; //response;
				//container
				// var container = document.createElement('div');
				// container.setAttribute("class", "sovSelectSegmentedShort")
				//create table
				var table = document.createElement('table');
				// table.setAttribute("class", "sovSelectSegmentedShort")
				// ulElem.style.listStyle = "none";
				
				for(attribute in attributes){
					var row = document.createElement('tr');
					row.innerHTML="<td>"+ attribute + ": </td><td>"+ attributes[attribute]+"</td>";
					table.appendChild(row);
				}
				element.appendChild(table);
				
				
				var more = document.createElement('button');
				more.className = "sovMore"; 
				more.textContent = 'more...';
				//more.href="#";
				more.title = "Open complete list of attributes";
				more.onclick = function() {
					
					if($('#sovAttributeWindow'+filemakerId).length == 0){
						var attributeWindow = document.createElement('div');
						attributeWindow.id = 'sovAttributeWindow'+filemakerId;
						document.body.appendChild(attributeWindow);
						$(attributeWindow).dialog(	{
														title:'Complete attribute list of '+filemakerId,
														close: function(event, ui) {$(this).dialog('destroy').remove();}
													});
						$(attributeWindow).html('Loading attributes <img src="./lib/resources/images/maya-spinner.gif" style="vertical-align:middle;">');
					}
					
				};
				// $(more).button();
				
				element.appendChild(more);
				
				
				
				
				// element.appendChild(container);
				
			}.bind(this);
			var onError = function(response) {
				$(element).removeClass('sovLoading');
				console.log(response);
				}.bind(this);
				
			var gs = new MA3D.AttributeService({url:"http://www.mayaarch3d.org/as/"});
			gs.requestShortAttributes(filemakerId, onSuccess, onSuccess/*onError*/); //should be JSON
			
		};
		
		this.createGui = function(nodes) {
			this.deleteGui();
			
			var selectSegmentedContainer = document.createElement('div');
			selectSegmentedContainer.setAttribute('class','sovSelectSegmentedContainer');
			selectSegmentedContainer.innerHTML = "<div class='toolbar-content-box-header'>Segmentation levels:</div>";
			
			var ulElem = document.createElement('ul');
			ulElem.setAttribute('class','sovSegmentsList');
			
			var onClick = function(event) {
				
				//don't collapse on more link
				var origTarget = event.srcElement || event.originalTarget; //IE,Chrome || FF
				if(origTarget.tagName.toUpperCase() == "BUTTON")return;
				
				//create, show or hide attributelist
				var element = event.currentTarget; //li element, which has the listener
				var attrId = element.attributes.getNamedItem("ma3d_attr_id").value;
				
				if($(element).children('.sovSelectSegmentedShort').length == 0){
					var container = document.createElement('div');
					container.setAttribute("class", "sovSelectSegmentedShort");
					container.style.display = 'none';
					container.className += ' sovLoading';
					element.appendChild(container);
					this.createAttributeList( container, attrId ); //Request Attributes
				}
				if($(element).children('.sovSelectSegmentedShort:first').get(0).style.display == 'none'){
					$(element).children('.sovSelectSegmentedShort:first').slideDown();
				}
				else{
					$(element).children('.sovSelectSegmentedShort:first').slideUp();
				}	
				
			}.bind(this);
			
			var onMouseEnter = function(event) {
				var element = event.currentTarget;
				var object	= this.scene.root.getObjectById( parseInt(element.attributes.getNamedItem("ma3d_obj_id").value), true);
				
				var originalselectColor = this.selectControl.config.selectColor;
				this.selectControl.config.selectColor = 0xFF3300;
				//highlight recursive
				object.traverse(function(obj){
					if(obj.geometry && !obj.userData.isSelected)this.selectControl.highlight(obj);
				}.bind(this));
				this.selectControl.config.selectColor = originalselectColor;
			}.bind(sov);
			
			var onMouseLeave = function(event) {
				var element = event.currentTarget;
				var object	= this.scene.root.getObjectById( parseInt(element.attributes.getNamedItem("ma3d_obj_id").value), true);
				
				//highlight recursive
				object.traverse(function(obj){
					if(obj.geometry && !obj.userData.isSelected)this.selectControl.unhighlight(obj);
				}.bind(this));
				
			}.bind(sov);
			
			for(var i=0,j=nodes.length; i<j; i++){
				  
				var objectNameTokens = nodes[i].name.split('_');
				var nodeType 	= objectNameTokens[0] || 'unknown';
				//@TODO get correct Id when geometry service is ready
				var geomId = objectNameTokens[1];
				var attrId = objectNameTokens[2];
				//var attrId 		= objectNameTokens.slice(1,objectNameTokens.length).join('_');//objectNameTokens[1] || '';
				//... 
				
				var liElem = document.createElement('li');
				// liElem.setAttribute('id',nodeId);
				liElem.setAttribute("ma3d_obj_name",	nodes[i].name );
				liElem.setAttribute("ma3d_obj_id",		nodes[i].id ); //internal THREE.js Id
				liElem.setAttribute("ma3d_node_type",	nodeType );
				liElem.setAttribute("ma3d_attr_id",		attrId ); //FilemakerId
				liElem.setAttribute("ma3d_geom_id",		geomId ); //PostgresId
				
				var nodeHeader = (i==0)? "You selected:<br>" : "which is part of:<br>";
				liElem.innerHTML = nodeHeader + '<span class="sovBold">' + nodeType + ' ' + geomId + ' ' + attrId + '</span>';
				liElem.addEventListener('click', onClick, false);
				liElem.addEventListener('mouseenter', onMouseEnter, false);
				liElem.addEventListener('mouseleave', onMouseLeave, false);
				
				ulElem.appendChild(liElem);
			};
			
			selectSegmentedContainer.appendChild(ulElem);
			
			$('#select_output_container').append(selectSegmentedContainer);
		};
		
		this.onSelect = function(event) {
			var nodes = this.getParentNodes(event.content);
			this.createGui(nodes);
		}.bind(this);
		
		this.onUnselect = function(event) {
			console.log('unselect segmented');
			this.deleteGui();
		}.bind(this);
		
		//register events
		$('#select').on('change', function(e) {
			if(e.target.checked){
				
				// var onSelected = function(event) {document.getElementById('select_output').value = event.content.name;};
				// var onUnselected = function(event) {document.getElementById('select_output').value = 'selected object';};
				sov.selectControl.addEventListener('selected', this.onSelect);
				sov.selectControl.addEventListener('unselected', this.onUnselect);
			} else {
				sov.selectControl.removeEventListener('selected', this.onSelect);
				sov.selectControl.removeEventListener('unselected', this.onUnselect);
			}
		}.bind(this));
		 
	};
	
	MA3D.singleObjectViewer = function(containerDiv, modelURL, format, verticalAxis, georef, segmented) {
		
		// sov variables
		this.containerDiv 	= containerDiv;
		this.modelURL		= modelURL;
		this.format			= format;
		this.verticalAxis	= verticalAxis;
		this.georef			= georef;
		this.segmented		= segmented;
		
		
		this.unload = function() {
		
			this.scene.onUnload(); //better dispatch
			this.containerDiv.innerHTML="";
		
		};
		
		
		var getURLParams = function(url) {
	
			//parse out parameters portion of url string
			var paramsString = "";
			var start = url.indexOf('?') + 1;
			var end = url.length;
			paramsString = url.substring(start, end);
	
			var parameters = {};
			var pairs = paramsString.split(/[&;]/);
			for (var i = 0, len = pairs.length; i < len; ++i) {
				var keyValue = pairs[i].split('=');
				if (keyValue[0]) {
					var key = decodeURIComponent(keyValue[0]);
					var value = decodeURIComponent(keyValue[1]) || '';
					//empty string if no value
					parameters[key] = value;
				}
			}
			return parameters;
		};
	
		//split containerDiv into toolbar and canvascontainer
		var toolbarDiv = document.createElement('div');
		toolbarDiv.setAttribute('id', 'toolbar');
		var canvascontainerDiv = document.createElement('div');
		canvascontainerDiv.setAttribute('id', 'canvascontainer');
		this.containerDiv.appendChild(toolbarDiv);
		this.containerDiv.appendChild(canvascontainerDiv);
	
		//add Accordions to Toolbar
	
		//define number and Headline of Toolbar sections here
		// old var accordionHeaders = ["Navigation", "View", "Render options", "Tools", "Analysis", "Console"];
		var accordionHeaders = [
								{title:"Navigation",	state:'closed'},
								{title:"View",			state:'open'},
								{title:"Render options",state:'closed'},
								{title:"Tools",			state:'open'},
								{title:"Analysis",		state:'closed'},
								{title:"Console",		state:'open'}
								];
		
		var accordionDiv = document.createElement('div');
		accordionDiv.setAttribute('id', 'accordion');
		toolbarDiv.appendChild(accordionDiv);
		for (var i = 0, length = accordionHeaders.length; i < length; i++) {
			var headline = document.createElement('div');
			$(headline).addClass('toolbar-header');
			(accordionHeaders[i].state == 'open')? $(headline).addClass('opened') : $(headline).addClass('closed');					//opened or closed
			headline.textContent = accordionHeaders[i].title;		//accordionHeaders[i].title
			headline.onclick = function(event) {
				var headline = $(event.target);
				var content = headline.next();
				if (headline.hasClass('closed')) {
					content.slideDown();
					headline.removeClass('closed');
					headline.addClass('opened');
				} else {
					content.slideUp();
					headline.removeClass('opened');
					headline.addClass('closed');
				}
			};
			accordionDiv.appendChild(headline);
			var content = document.createElement('div');
			content.setAttribute('id', accordionHeaders[i].title.replace(/\s+/g, '_').toLowerCase()); //accordionHeaders[i].title
			$(content).addClass('toolbar-content');
			if(accordionHeaders[i].state != 'open')$(content).hide();
			accordionDiv.appendChild(content);
	
		}
	
		//Add Toolbar Content
		
		//Navigation
		var navigationContent = $('#navigation').get(0);
		navigationContent.innerHTML = 	  "<input type='radio' name='navigation' id='orbit' checked='checked'><label for='orbit'>Orbit</label>"
										+ "<input type='radio' name='navigation' id='trackball'><label for='trackball'>Trackball</label>";
		$(navigationContent).buttonset();
		$('#orbit').on('change', function(e) {
			if(e.target.checked){
				// trackballControl.deactivate();
				// orbitControl.activate();
				navigationControl.setMode("OrbitZoomPan");
			}
		}.bind(this));
		$('#trackball').on('change', function(e) {
			if(e.target.checked){
				// orbitControl.deactivate();
				// trackballControl.activate();
				navigationControl.setMode("Trackball");
			}
		}.bind(this));
	
		//View
		// var viewContent = $('#accordion > .toolbar-content').get(0);
		var viewContent = $('#view').get(0);
		
		//request Fullscreen
		// var requestFullscreen = document.createElement('input');
		// requestFullscreen.setAttribute('type', 'button');
		// requestFullscreen.setAttribute('id', 'requestfullscreen');
		// requestFullscreen.value = 'Fullscreen Mode';
		// viewContent.appendChild(requestFullscreen);
		
		var requestFullscreen = document.createElement('input');
		requestFullscreen.setAttribute('type', 'checkbox');
		requestFullscreen.setAttribute('id', 'requestfullscreen');
		var requestFullscreenLabel = document.createElement('label');
		requestFullscreenLabel.setAttribute('for', 'requestfullscreen');
		requestFullscreenLabel.textContent = 'Fullscreen mode';
		var requestFullscreenContainer = document.createElement('div');
		requestFullscreenContainer.setAttribute('id', 'requestFullscreenContainer');
		$(requestFullscreenContainer).addClass('toolbar-content-box');
		requestFullscreenContainer.appendChild(requestFullscreen);
		requestFullscreenContainer.appendChild(requestFullscreenLabel);
		viewContent.appendChild(requestFullscreenContainer);
		
		var doc = (window.frameElement)? window.parent.document : document;
		$(requestFullscreen).button().on('change', function(e) {
			
			
			function launchFullScreen(element) {
			  	if(element.requestFullscreen) {
				    element.requestFullscreen();
				  } else if(element.mozRequestFullScreen) {
				    element.mozRequestFullScreen();
				  } else if(element.webkitRequestFullscreen) {
				    element.webkitRequestFullscreen();
				  } else if(element.msRequestFullscreen) {
				    element.msRequestFullscreen();
				  }
			}
			function exitFullscreen() {
				  if(doc.exitFullscreen) {
				    doc.exitFullscreen();
				  } else if(doc.mozCancelFullScreen) {
				    doc.mozCancelFullScreen();
				  } else if(doc.webkitExitFullscreen) {
				    doc.webkitExitFullscreen();
				  } else if(doc.msExitFullscreen){
				  	doc.msExitFullscreen();
				  }
			}	
				
			if(e.target.checked){
				// box was checked	
				if(window.frameElement){
					launchFullScreen(window.frameElement);
				}else{
					launchFullScreen(this.containerDiv);
				}
				
			}else
				exitFullscreen();	
			
		}.bind(this));
		$(requestFullscreen).button('widget').addClass('sovTools-button-icon').addClass('sovIcon-fullscreen');
		
		//if user exits fullscreen by ESC or F11
		var uncheckFullscreen = function ( event ) {
			// console.log('fullscreenchange');
		    // The event object doesn't carry information about the fullscreen state of the browser,
		    // but it is possible to retrieve it through the fullscreen API
		    if ( doc.fullScreenEnabled || doc.mozFullScreenEnabled || doc.webkitFullscreenEnabled || doc.msFullscreenEnabled) {        
		        // The target of the event is always the document,
		        // but it is possible to retrieve the fullscreen element through the API
		        var fse = doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement;
		        // console.log("fse: " + fse);
		        if(!(fse)){
		        	//deactivate button
		        	$('#requestfullscreen').removeAttr('checked');
		        	$('#requestfullscreen').button('refresh');
		        	//resize viewport 
		        	this.scene.onResize();
		        }
		    }
		
		}.bind(this);
		doc.addEventListener("fullscreenchange", uncheckFullscreen);
		doc.addEventListener("mozfullscreenchange", uncheckFullscreen);
		doc.addEventListener("webkitfullscreenchange", uncheckFullscreen);
		doc.addEventListener("MSFullscreenChange", uncheckFullscreen);
		
		//Camera Projection
		var setPerspectiveContainer = document.createElement('div');
		setPerspectiveContainer.setAttribute('id', 'setPerspectiveContainer');
		$(setPerspectiveContainer).addClass('toolbar-content-box');
		var setPerspectiveHeader = document.createElement('div');
		$(setPerspectiveHeader).addClass('toolbar-content-box-header');
		$(setPerspectiveHeader).addClass('ui-widget');
		setPerspectiveHeader.textContent = 'Camera Projection:';
	
		var setPerspective = document.createElement('input');
		setPerspective.setAttribute('type', 'radio');
		setPerspective.setAttribute('name', 'view');
		setPerspective.setAttribute('id', 'viewPerspective');
		setPerspective.setAttribute('checked', 'checked');
		setPerspectiveLabel = document.createElement('label');
		setPerspectiveLabel.setAttribute('for', 'viewPerspective');
		setPerspectiveLabel.textContent = 'Perspective';
	
		var setOrtho = document.createElement('input');
		setOrtho.setAttribute('type', 'radio');
		setOrtho.setAttribute('name', 'view');
		setOrtho.setAttribute('id', 'viewOrtho');
		setOrthoLabel = document.createElement('label');
		setOrthoLabel.setAttribute('for', 'viewOrtho');
		setOrthoLabel.textContent = 'Orthographic';
	
		setPerspectiveContainer.appendChild(setPerspectiveHeader);
		setPerspectiveContainer.appendChild(setPerspective);
		setPerspectiveContainer.appendChild(setPerspectiveLabel);
		setPerspectiveContainer.appendChild(setOrtho);
		setPerspectiveContainer.appendChild(setOrthoLabel);
	
		viewContent.appendChild(setPerspectiveContainer);
	
		$('#setPerspectiveContainer').buttonset();
		$('#viewOrtho').click(function() {
			// alert('asdv');
			this.scene.camera.toOrthographic();
		}.bind(this));
		$('#viewPerspective').click(function() {
			this.scene.camera.toPerspective();
		}.bind(this));
	
		//View from:
		var setViewFromContainer = document.createElement('div');
		setViewFromContainer.setAttribute('id', 'setViewFromContainer');
		$(setViewFromContainer).addClass('toolbar-content-box');
		var setViewFromHeader = document.createElement('div');
		$(setViewFromHeader).addClass('toolbar-content-box-header');
		$(setViewFromHeader).addClass('ui-widget');
		setViewFromHeader.textContent = 'View from:';
	
		setViewFromContainer.appendChild(setViewFromHeader);
	
		setViewFromContainer.innerHTML += '<div id="viewfrombuttons">' + '<button id="viewfromtop"></button>' + '<br>' + '<button id="viewfromleft"></button>' + '<button id="viewfromfront"></button>' + '<button id="viewfromright"></button>' + '<button id="viewfromback"></button>' + '<br>' + '<button id="viewfrombottom"></button>' + '</div>';
	
		viewContent.appendChild(setViewFromContainer);
	
		$('#viewfrombuttons > button').button().height(40).width(40);
		$('#viewfromtop').css({
			marginLeft : 43
		}).click(function() {
			this.scene.viewFrom('top');
		}.bind(this));
		$('#viewfromtop').attr("title", "View from top").tooltip({position:{"my":"right top", "at":"left bottom"}});
		$('#viewfrombottom').css({
			marginLeft : 43
		}).click(function() {
			this.scene.viewFrom('bottom');
		}.bind(this));
		$('#viewfrombottom').attr("title", "View from bottom").tooltip({position:{"my":"right top", "at":"left bottom"}});
		$('#viewfromleft').click(function() {
			this.scene.viewFrom('left');
		}.bind(this));
		$('#viewfromleft').attr("title", "View from left").tooltip({position:{"my":"right top", "at":"left bottom"}});
		$('#viewfromright').click(function() {
			this.scene.viewFrom('right');
		}.bind(this));
		$('#viewfromright').attr("title", "View from right").tooltip({position:{"my":"right top", "at":"left bottom"}});
		$('#viewfromfront').click(function() {
			this.scene.viewFrom('front');
		}.bind(this));
		$('#viewfromfront').attr("title", "View from front").tooltip({position:{"my":"right top", "at":"left bottom"}});
		$('#viewfromback').click(function() {
			this.scene.viewFrom('back');
		}.bind(this));
		$('#viewfromback').attr("title", "View from back").tooltip({position:{"my":"right top", "at":"left bottom"}});
	
		//Render options
		// var renderContent = $('#accordion > .toolbar-content').get(1);
		var renderContent = $('#render_options').get(0);
		renderContent.innerHTML = "<input id='wireframe' type='checkbox'><label for='wireframe'>Wireframe</label>" 
								+ "<input id='textureOff' type='checkbox'><label for='textureOff'>Texture off</label>" 
								+ "<hr>"
								+ "<div id='renderFaces_container' class='ui-widget'>"
								+ "Render faces:"
								+ "<br>"
								+ "<input id='defaultside' type='radio' checked='checked' name='faceCullingMode'><label for='defaultside'>Default</label>"
								+ "<input id='frontside' type='radio' name='faceCullingMode'><label for='frontside'>Front</label>"
								+ "<input id='backside' type='radio' name='faceCullingMode'><label for='backside'>Back</label>"
								+ "<input id='doubleside' type='radio' name='faceCullingMode'><label for='doubleside'>Double</label>"
								+ "<input id='defaultshading' type='radio' checked='checked' name='shadingMode'><label for='defaultshading'>Default</label>"
								+ "<input id='flatshading' type='radio' name='shadingMode'><label for='flatshading'>Flat</label>"
								+ "<input id='smoothshading' type='radio' name='shadingMode'><label for='smoothshading'>Smooth</label>"
								+ "</div>"
								+ "<hr>"
								+ "<input id='changeBackground' type='checkbox'><label for='changeBackground'>Change Background Color</label>"
								+ "<div id='changeBackground_color_container' style='display:none;'></div>"
								;
		
		//+ "<input id='vertexColor' type='checkbox'><label for='vertexColor'>Color</label>";
	
		$('#wireframe').button().bind('change', function(e) {
			
			if(e.target.checked){
				// box was checked
				this.scene.setWireframe(true);
			}else {
				this.scene.setWireframe(false);
			}
			
			// if ($(this).is(':checked')) {
				// // box was checked
				// this.scene.setWireframe(true);
			// } else {
				// this.scene.setWireframe(false);
			// }
		}.bind(this));
		$("label[for=wireframe]").addClass('tools-button');
		
		$('#textureOff').button().bind('change', function(e) {
			
			if(e.target.checked){
				// box was checked
				this.scene.setTexturing(false);
			}else {
				this.scene.setTexturing(true);
			}
			
			// if ($(this).is(':checked')) {
				// // box was checked
				// this.scene.setWireframe(true);
			// } else {
				// this.scene.setWireframe(false);
			// }
		}.bind(this));
		$("label[for=textureOff]").addClass('tools-button');
		
		$('#changeBackground').button().on('change', function(e) {
			if(e.target.checked){
				// box was checked
				
				if($('#changeBackground_color_container').children().length == 0){
					this.backgroundColors = [
											0x000000, 0x333333, 0x666666, 0x999999, 0xcccccc, 0xffffff,	
											0x000033, 0x003333, 0x003300, 0x333300, 0x330000, 0x330033,
											0x9999dd, 0x87cefa, 0x99dd99, 0xdddd99, 0xdd9999, 0xdd99dd
											];
					var backgroundColorColums = 6;
					var backgroundColorFieldSize = 16;
					$('#changeBackground_color_container').get(0).style.width = backgroundColorColums * backgroundColorFieldSize + backgroundColorColums + "px";
					$('#changeBackground_color_container').get(0).style.borderLeft = '1px solid black';
					$('#changeBackground_color_container').get(0).style.borderTop = '1px solid black';
					// $('#changeBackground_color_container').get(0).style.margin = '5px 0 0 5px';
					$('#changeBackground_color_container').addClass('sovToolContainer');
					for(var i=0,l=this.backgroundColors.length;i<l;i++){
						var element = document.createElement('div');
						element.style.backgroundColor = "#" + (this.backgroundColors[i] = new THREE.Color(this.backgroundColors[i])).getHexString();
						element.style.cssFloat 	= 'left';
						element.style.height 	= backgroundColorFieldSize + 'px';
						element.style.width 	= backgroundColorFieldSize + 'px';
						element.style.cursor 	= 'pointer';
						element.style.borderBottom	= '1px solid black';
						element.style.borderRight	= '1px solid black';
						element.onclick = function(event) {
								var i = $(event.target).index();
								this.scene.renderer.setClearColor(this.backgroundColors[i]);
							}.bind(this);
						$('#changeBackground_color_container').append(element);
						// if( i > 0 && (i+1) % (backgroundColorColums) == 0 ){
							// var linebreak = document.createElement('br');
							// $('#changeBackground_color_container').append(linebreak);
						// }
					}
					var element = document.createElement('div');
					element.style.clear = 'both';
					$('#changeBackground_color_container').append(element);
				}
				$('#changeBackground_color_container').slideDown();
			}else {
				$('#changeBackground_color_container').slideUp();
			}
		}.bind(this));
		
		
		$('#renderFaces_container').buttonset();
		$('#frontside').on('change', function(e) {
			if(e.target.checked){
				this.scene.setFaceCulling(THREE.FrontSide);
			}
		}.bind(this));
		$('#backside').on('change', function(e) {
			if(e.target.checked){
				this.scene.setFaceCulling(THREE.BackSide);
			}
		}.bind(this));
		$('#doubleside').on('change', function(e) {
			if(e.target.checked){
				this.scene.setFaceCulling(THREE.DoubleSide);
			}
		}.bind(this));
		$('#defaultside').on('change', function(e) {
			if(e.target.checked){
				this.scene.setFaceCulling('default');
			}
		}.bind(this));
		$('#flatshading').on('change', function(e) {
			if(e.target.checked){
				this.scene.setShading(THREE.FlatShading);
			}
		}.bind(this));
		$('#smoothshading').on('change', function(e) {
			if(e.target.checked){
				this.scene.setShading(THREE.SmoothShading);
			}
		}.bind(this));
		$('#defaultshading').on('change', function(e) {
			if(e.target.checked){
				this.scene.setShading('default');
			}
		}.bind(this));
		
		// $('#vertexColor').button().bind('change', function() {
			// if ($(this).is(':checked')) {
				// // box was checked
				// scene.root.overrideMaterial = new THREE.MeshLambertMaterial({
					// vertexColors : THREE.VertexColors,
				// });
			// } else {
				// scene.root.overrideMaterial = null;
			// }
		// });
	
		//Tools
		// var toolContent = $('#accordion > .toolbar-content').get(2);
		var toolContent = $('#tools').get(0);
		toolContent.innerHTML = [
									"<input id='camLight' type='checkbox'><label for='camLight'>Interactive Illumination</label>",
									"<div id='camLight_container' style='display:none;' class='ui-widget'>",
									"Light Intensity:",
									"</div>",
									"<hr>",
									"<input id='select' type='checkbox'><label for='select'>Get Feature Info</label>",
									"<div id='select_output_container' style='display:none;' class='ui-widget'>",
									"<label for='select_output'>Name: </label><input id='select_output' type='text' value='selected object'>",
									"</div>",
									"<hr>",
									"<input id='pickCoords' type='checkbox'><label for='pickCoords'>Pick Coordinate</label>",
									"<div id='pickCoords_output_container' style='display:none;text-align:right;' class='ui-widget'>",
									"X<input id='pickCoords_output_x' type='text'>",
									"<br>",
									"Y<input id='pickCoords_output_y' type='text'>",
									"<br>",
									"Z<input id='pickCoords_output_z' type='text'>",
									"</div>",
									"<hr>",
									"<input id='measure' type='checkbox'><label for='measure'>Measure Distance</label>",
									"<button id='measure_clear'>Clear</button>",
									"<div id='measure_output_container' style='display:none;text-align:right;' class='ui-widget'>",
									"Distance<input id='measure_output_distance' type='text'>",
									"</div>"
									
								].join("\n");
		
		$('#camLight').button().addClass('tools-button').on('change', function() {
			if ($(this).is(':checked')) {
				// box was checked
				cameraLightControl.activate();
				// $('#camLight_container').get(0).style.margin = '5px 0 0 5px';
				$('#camLight_container').addClass('sovToolContainer');
				if( $('#camLight_container').children().length == 0) {
					var sliderElement = document.createElement('div');
					$(sliderElement).slider({
						min:0.1,
						max:1,
						step:0.01,
						value:cameraLightControl.light.intensity,
						animate: true,
						slide: function(e,ui) {cameraLightControl.light.intensity = ui.value;}
					});
					$('#camLight_container').append(sliderElement);
				}
				$('#camLight_container').slideDown();
			} else {
				cameraLightControl.deactivate();
				$('#camLight_container').slideUp();
			}
		});
		$("label[for=camLight]").addClass('tools-button');
		$('#camLight').button('widget').addClass('sovTools-button-icon').addClass('sovIcon-lamp');
		
		$('#select').button().addClass('tools-button').on('change', function(e) {
			if(e.target.checked){
				this.selectControl.selectables = this.scene.layers[0].root.getDescendants();
				this.selectControl.activate();
				$('#select_output_container').addClass('sovToolContainer');
				var onSelected = function(event) {document.getElementById('select_output').value = event.content.name;};
				var onUnselected = function(event) {document.getElementById('select_output').value = 'selected object';};
				this.selectControl.addEventListener('selected', onSelected);
				this.selectControl.addEventListener('unselected', onUnselected);
				$('#select_output_container').slideDown();
			} else {
				this.selectControl.removeEventListener('selected', onSelected);
				this.selectControl.removeEventListener('unselected', onUnselected);
				this.selectControl.deactivate();
				$('#select_output_container').slideUp();
			}
		}.bind(this));
		$('#select').button('widget').addClass('sovTools-button-icon').addClass('sovIcon-info');
		
		
		$('#pickCoords').button().addClass('tools-button').on('change', function(e) {
			if(e.target.checked){
				$('#pickCoords_output_container').slideDown();
				pickControl.pickables = this.scene.layers[0].root.getDescendants();
				pickControl.activate();
				var onClick = function(event) {
					if(event.content){
						var point = event.content.point;
						$('#pickCoords_output_x').get(0).value = point.x.toFixed(6);
						$('#pickCoords_output_y').get(0).value = point.y.toFixed(6);
						$('#pickCoords_output_z').get(0).value = point.z.toFixed(6);
					}
				};
				pickControl.addEventListener('click', onClick);
			}else{
				$('#pickCoords_output_container').slideUp();
				pickControl.removeEventListener('click', onClick);
				pickControl.deactivate();
				
			}
		}.bind(this));
		$('#pickCoords').button('widget').addClass('sovTools-button-icon').addClass('sovIcon-cross');
		
		// measure distance
		$('#measure').button().addClass('tools-button').on('change', function(e) {
			if(e.target.checked){
				$('#measure_output_container').slideDown();
				measureControl.measureables = this.scene.layers[0].root.getDescendants();
				measureControl.activate();
				var onClick = function(event) {
					
					var distance = event.content.distance;
					$('#measure_output_distance').get(0).value = distance.toFixed(6) + this.scene.config.units;
					console.log(event.content.angleToNorth);
					
				};
				measureControl.addEventListener('measure', onClick);
			}else{
				$('#measure_output_container').slideUp();
				$('#measure_output_distance').get(0).value = "0" + this.scene.config.units;
				measureControl.removeEventListener('measure', onClick);
				measureControl.deactivate();
				
			}
		}.bind(this));
		$('#measure').button('widget').addClass('sovTools-button-icon').addClass('sovIcon-measure');
		
		var onClear = function() {
			if(measureControl.isActive){
				$('#measure_output_distance').get(0).value = "0" + this.scene.config.units;
				measureControl.deactivate();
				measureControl.activate();
			}
		}.bind(this);
		$('#measure_clear').button().click(onClear);
		
		//Analysis
	
		//Console
		// var consoleContent = $('#accordion > .toolbar-content').get(4);
		var consoleContent = $('#console').get(0);
		consoleContent.innerHTML = "<div class='ui-widget'>Filename:</div><div id='console'></div>";
	
		//add GIscene
		var config = {
			//canvas size
			//width: 800,
			//height: 400,
	
			//camera params
			near : 0.1,
			far : 20000,
	
			//scene options
			// center : new THREE.Vector3(0, 0, 0),
			// spatialReferenceSystem : 'EPSG:32616', //not yet used UTM16N???-->EPSG:32616
			units : 'm', //used for GIScene.Control.Measure
			// offset : new THREE.Vector3(0,0,0),//new THREE.Vector3(269500, 550, -1641500), //not yet used offset is used to keep coordinates short.
			skyColor : new THREE.Color(0x000033)
		};
	
		this.scene = new GIScene.Scene("canvascontainer", config);
	
		//set initial Lighting
		this.scene.directionalLight.position.set(0, 1, 0.5);
		//this.scene.setCenter(new THREE.Vector3(0, 200, 0),null,0);
	
		//navigation
		// orbitControl = new GIScene.Control.OrbitZoomPan(this.scene.camera, this.scene.containerDiv);
		// this.scene.addControl(orbitControl);
		// orbitControl.activate();
	// 	
		// trackballControl = new GIScene.Control.Trackball(this.scene.camera, this.scene.containerDiv);
		// this.scene.addControl(trackballControl);
		// trackballControl.activate();
		
		
		//loadIndicaor
		var loadIndicator = new GIScene.Control.LoadIndicator();
		this.scene.addControl(loadIndicator);
		loadIndicator.activate();
		//cameraCoords
		var camCoordsControl = new GIScene.Control.ObjectPosition(this.scene.camera);
		this.scene.addControl(camCoordsControl);
		camCoordsControl.activate();
		//compass
		var compassControl = new GIScene.Control.Compass(this.scene.camera);
		this.scene.addControl(compassControl);
		compassControl.activate();
		//axisHelper 
		var axisHelperControl = new GIScene.Control.AxisHelper(this.scene.camera);
		this.scene.addControl(axisHelperControl);
		// axisHelperControl.activate();
		//select
		this.selectControl = new GIScene.Control.Select([], this.scene.camera, {hover:false,highlightOnly:false,toggle:true});
		this.scene.addControl(this.selectControl);
		//pick coordinate
		var pickControl = new GIScene.Control.Pick(this.scene.camera);
		this.scene.addControl(pickControl);
		//measure distance
		var measureControl = new GIScene.Control.Measure(this.scene.camera, {color: new THREE.Color(0xff7700)});
		this.scene.addControl(measureControl);
		//interactive lighting
		var cameraLightControl = new GIScene.Control.CameraLight(this.scene.camera, this.scene.directionalLight);
		this.scene.addControl(cameraLightControl);
		cameraLightControl.addEventListener("panstart", function() {
			navigationControl.deactivate();
		});
		cameraLightControl.addEventListener("panend", function() {
			navigationControl.activate();
		});
		
		var navigationControl = new MA3D.NavigationControl(this.scene.camera, this.scene.containerDiv, this.scene);
		navigationControl.activate();
		
		
	
		
		// scene.toggleDebugView();
	
		this.setGeoreferenceMode = function(isGeoreferenced) {
			if(isGeoreferenced){
				if(axisHelperControl.isActive)axisHelperControl.deactivate();
				if(!camCoordsControl.isActive)camCoordsControl.activate();
				if(!compassControl.isActive)compassControl.activate();
			}
			else {
				if(camCoordsControl.isActive)camCoordsControl.deactivate();
				if(compassControl.isActive)compassControl.deactivate();
				if(!axisHelperControl.isActive)axisHelperControl.activate();
			}
		};
	
		var onload = function(event) {
			// console.log('sov:onload');
			//this.scene.setCenter(new THREE.Vector3(0,0,0), new THREE.Vector3(0,200,0),0);
			//Center on BoundingBoxCenter
			// console.log("setCenter "+event.content.boundingBox.center().toArray().toString());
			// console.log(event.content.boundingBox.getBoundingSphere().radius, event.content.boundingBox.getBoundingSphere().radius);
			this.scene.setCenter(event.content.boundingBox.center(), new THREE.Vector3(0, 0 /*event.content.boundingBox.getBoundingSphere().radius*/, event.content.boundingBox.getBoundingSphere().radius*2));
			// console.log("scene.center " + this.scene.center.toArray().toString());
			// console.log("camtarget.position "+this.scene.camera.localToWorld(this.scene.camera.target.position.clone()).toArray().toString());
			//Center on Mean
			// this.scene.setCenter(GIScene.Utils.computeVertexMeanRecursive(event.content.root), new THREE.Vector3(0, event.content.boundingBox.getBoundingSphere().radius, event.content.boundingBox.getBoundingSphere().radius));
			
			// var isGeoref = (("georef" in params)? params.georef !== "false" : (this.georef !=null)? this.georef : true);
			// this.setGeoreferenceMode(isGeoref);
			
		}.bind(this);
		
		//if model url & format specified in constructor use them otherwise check for params in the url
		if (this.modelURL && this.format){
			var params = {
				"url":this.modelURL,
				"format": this.format
			};
		}else{
			//get file to load from URL
			var params = getURLParams(window.location.href);
		}
		
		
		
		//check if url and format is specified
		if ("url" in params && "format" in params) {
			var gisceneFormat;
			switch (params.format) {
				case 'json':
					gisceneFormat = GIScene.Format.JSON;
					break;
				case 'scene':
					gisceneFormat = GIScene.Format.Scene;
					break;
				case 'ctm':
					gisceneFormat = GIScene.Format.CTM;
					break;
				default:
					alert('The specified format: ' + params.format + ' is not supported');
			}
	
			var layerParams = {
				url : params.url,
				format : gisceneFormat,
				verticalAxis : ((("verticalAxis" in params)? params.verticalAxis : (this.verticalAxis !=null)? this.verticalAxis : "Y").toUpperCase() == "Z")? "Z" : "Y",
				listeners:[{'load':onload}]
				//("verticalAxis" in params && params.verticalAxis.toUpperCase() == "Z") ? "Z" : "Y"
			};
			var layer = new GIScene.Layer.Fixed(layerParams.url.split('/').pop(), layerParams);
			// layer.addEventListener('load', onload);
			this.scene.addLayer(layer);
			
			//check georeferncing mode
			var isGeoref = (("georef" in params)? params.georef !== "false" : (this.georef !== null)? this.georef : true);
			this.setGeoreferenceMode(isGeoref);	
			// segmented section mode (Get Feature Info)
			var isSegmented = (("segmented" in params)? params.segmented !== "false" : (this.segmented !== null)? this.segmented : true);
			if(isSegmented) {console.log('isSegmented');var selectSegmentedModel = new MA3D.SelectSegmentedModel(this);}
					
			$('#console').text(layer.name).addClass('ui-widget');
		} else {
			var confirmed = confirm('To load a model automatically you need to specify two parameters in the URL:\n\nurl: path from where the model can be downloaded\nformat: one of the following ( json | scene | ctm )\nverticalAxis: one of ( z | y ) [optional]\n\n Do you wand to load a default model instead?');
			if (confirmed) {
				var layerParams = {
					//url : 'http://mayaarch3d.org/gs/json/1234/geom_buildings/10L-22/children',
					url : 'http://www.mayaarch3d.org/dev/examples/data/models/10L-22_children.json',
					format : GIScene.Format.Scene,
					listeners:[{'load':onload}]
				};
	
				var layer = new GIScene.Layer.Fixed(layerParams.url.split('/').pop(), layerParams);
				// layer.addEventListener('load', onload);
				this.scene.addLayer(layer);
				$('#console').text(layer.name).addClass('ui-widget');
			}
		}
		
		//prevent scrolling the parent if used in iframe
		if(window.parent != window){ //same if not used in frame
			function preventDefault(e) {
				console.log('preventDefault');
			  	e = e || window.event;
			  	if (e.preventDefault)
			    	e.preventDefault();
			  	e.returnValue = false;  
			}
			
			var parentNoScroll = function () {
				// console.log("noscroll");
				window.addEventListener("DOMMouseScroll", preventDefault, false);
	   			window.addEventListener("mousewheel", preventDefault, false);
	   			// window.parent.onwheel = preventDefault;
	   			// window.parent.document.body.className += " sov_noscroll";
	   			// window.parent.onscroll = function() {
				    // window.parent.scrollTo(window.parent.scrollX, window.parent.scrollY);
				// };
			}.bind(window.parent);
			
			var parentScroll = function () {
				// console.log('scroll');
				window.removeEventListener("DOMMouseScroll", preventDefault, false);
	   			window.removeEventListener("mousewheel", preventDefault, false);
	   			// window.parent.onwheel = undefined;
	   			// window.parent.document.body.classList.remove("sov_noscroll");
	   			// window.parent.onscroll = null;
			}.bind(window.parent);
			
			this.scene.containerDiv.addEventListener("mouseenter", parentNoScroll, false);	
	   		this.scene.containerDiv.addEventListener("mouseleave", parentScroll, false);
	   		
	   		//prepare iframe to be fullscreen enabled
	   		if(window.frameElement) window.frameElement.allowFullscreen = true;
		}
		
	}; 