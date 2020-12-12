var ImageViewer = function(container, parentelement, imageServiceAdress) {
	this.mesh = null;
	this.container = null;
	this.scene = null;
	this.camera = null;
	this.renderer = null;
	this.controls = null;
	this.stats = null;
	this.keyboard = new KeyboardState();
	this.clock = new THREE.Clock();
	this.scene;
	this.parentelement = parentelement;
	this.container = container;

	this.mouse = new THREE.Vector2();
	this.objects = [];
	this.plane = null;
	this.offset = new THREE.Vector3();
	this.INTERSECTED = null;
	this.SELECTED = null;
	this.controlkey = false;
	
	this.SCREEN_WIDTH = 0;
	this.SCREEN_HEIGHT = 0;
	
	this.imagecounter = 0;
	
	this.mousedown = false;
	
	this.border = 30;
	this.topCorrection = 2;
	this.leftCorrection = 2;
	
	this.imageServiceAdress = imageServiceAdress;
	
	this.init();
};

ImageViewer.prototype.animate = function() {
	var o = this;
	requestAnimationFrame(function() { o.animate(); });
	this.render();
	this.update();	
};

ImageViewer.prototype.render = function() {
	this.renderer.render(this.scene, this.camera);	
};

ImageViewer.prototype.update = function() {
	if (this.keyboard.pressed("z")) {
		// do something
	}
	this.controls.update();
	this.stats.update();
};

ImageViewer.prototype.resize = function() {	
	this.SCREEN_WIDTH = $('#' + this.parentelement).width() - this.border;
	this.SCREEN_HEIGHT = $('#' + this.parentelement).height() - this.border;
	var VIEW_ANGLE = 45, ASPECT = this.SCREEN_WIDTH / this.SCREEN_HEIGHT, NEAR = 0.1, FAR = 200000;
	
	this.renderer.setSize(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
	
	this.camera.fov = VIEW_ANGLE;
	this.camera.aspect = ASPECT;
	this.camera.near = NEAR;
	this.camera.far = FAR;
	this.camera.updateProjectionMatrix();
	/*this.camera.position.set(0, 0, -1000);
	this.camera.lookAt(0, 0, 1000);
	 */
	this.animate();
};

ImageViewer.prototype.init = function() {	
	// SCENE
	this.scene = new THREE.Scene();
	// CAMERA
	this.SCREEN_WIDTH = $('#' + this.parentelement).width() - this.border;
	this.SCREEN_HEIGHT = $('#' + this.parentelement).height() - this.border;
	var VIEW_ANGLE = 45, ASPECT = this.SCREEN_WIDTH / this.SCREEN_HEIGHT, NEAR = 0.1, FAR = 200000;
	this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	this.scene.add(this.camera);
	this.camera.position.set(0, 0, -10000);
	this.camera.lookAt(0, 0, 1000);
	// RENDERER
	if ( Detector.webgl )
		this.renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		this.renderer = new THREE.CanvasRenderer();
	this.renderer.setSize(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
	this.container = document.getElementById( this.container );
	this.container.appendChild( this.renderer.domElement );
	// EVENTS
	THREEx.WindowResize(this.renderer, this.camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
	// CONTROLS
	//this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
	this.controls = new THREE.ImageViewMouseControl( this.camera, this.renderer.domElement );
	// STATS
	this.stats = new Stats();
	this.stats.domElement.style.position = 'relative';
	this.stats.domElement.style.bottom = '0px';
	this.stats.domElement.style.zIndex = 100;
	//this.container.appendChild( this.stats.domElement );
	// LIGHT
	var light = new THREE.PointLight(0xffffff);
	light.position.set(100,250,100);
	this.scene.add(light);

	// SKYBOX
	var skyBoxGeometry = new THREE.CubeGeometry( 100000, 100000, 100000 );
	var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
	var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
	this.scene.add(skyBox);
	////////////
	// CUSTOM //
	////////////
	
	var geometry = new THREE.SphereGeometry( 30, 32, 16 );
	var material = new THREE.MeshLambertMaterial( { color: 0x000088 } );
	
	this.mesh = new THREE.Mesh( geometry, material );
	this.mesh.position.set(0,0,10);
	
	this.scene.add(this.mesh);
	
	this.plane = new THREE.Mesh(
			new THREE.PlaneGeometry( 2000000, 2000000, 8, 8 ),
			new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.25, transparent: true } )
	);
	this.plane.visible = false;
	this.scene.add(this.plane);
	
	var self = this;
	
	this.renderer.domElement.addEventListener( 'mousemove', function(event) {self.onDocumentMouseMove(event);}, false );
	this.renderer.domElement.addEventListener( 'mousedown', function(event) {self.onDocumentMouseDown(event);}, false );
	this.renderer.domElement.addEventListener( 'mouseup', function(event) {self.onDocumentMouseUp(event);}, false );
	this.renderer.domElement.addEventListener( 'mousewheelevt', function(event) {self.onDocumentMouseWheel(event);}, false );
	
	$(window).resize(function() {
		self.resize();
	});
	
	$(window).keydown(function(e){ 
	    if (e.ctrlKey) {
	    	self.controlkey = true;
	    	//console.info("Control Down");
	    }
	    
	    if (e.keyCode == 46) { //del
	    	if (self.mousedown && self.SELECTED != null) {
	    		self.scene.remove(self.SELECTED);
	    	}
	    	
	    }
	    
	    if (e.keyCode == 171) { //+
	    	if (self.mousedown && self.SELECTED != null) {
	    		self.SELECTED.scale.x = self.SELECTED.scale.x + 0.1;
	    		self.SELECTED.scale.y = self.SELECTED.scale.y + 0.1;
	    		self.SELECTED.scale.z = self.SELECTED.scale.z + 0.1;
			}	
	    }
	    
	    if (e.keyCode == 76) { //l
	    	if (self.mousedown && self.SELECTED != null) {
	    		self.SELECTED.rotation.z = self.SELECTED.rotation.z - 0.1;
	    	}
	    }
	    
	    if (e.keyCode == 82) { //r
	    	if (self.mousedown && self.SELECTED != null) {
	    		self.SELECTED.rotation.z = self.SELECTED.rotation.z + 0.1;
	    	}
	    }
	    
	    if (e.keyCode == 173) { //-
	    	if (self.mousedown && self.SELECTED != null) {
	    		self.SELECTED.scale.x = self.SELECTED.scale.x - 0.1;
	    		self.SELECTED.scale.y = self.SELECTED.scale.y - 0.1;
	    		self.SELECTED.scale.z = self.SELECTED.scale.z - 0.1;
			}	
	    }
		
	});
	
	$(window).keyup(function(e){
	    if (!e.ctrlKey) {
	    	self.controlkey = false;
	    	//console.info("Control Up");
	    }
	});
};

ImageViewer.prototype.getElementTopLeft = function(ele) {

    var top = 0;
    var left = 0;
   
    while(ele.tagName != "BODY") {
        top += ele.offsetTop;
        left += ele.offsetLeft;
        ele = ele.offsetParent;
    }
   
    return { top: top, left: left };
   
};

ImageViewer.prototype.onDocumentMouseMove = function(event) {
	event.preventDefault();
	
	var left = (this.getElementTopLeft(this.container).left + this.border / 2 +  this.leftCorrection);
	var top = (this.getElementTopLeft(this.container).top + this.topCorrection);
	
	var eventX = event.clientX - left;
	var eventY = event.clientY - top;
	
	//console.info("eventX: " + eventX + " eventY: " + eventY);
	
	this.mouse.x = (eventX / this.SCREEN_WIDTH) * 2 - 1;
	this.mouse.y = - (eventY / this.SCREEN_HEIGHT) * 2 + 1;
	
	//console.info("mouse.x: " + this.mouse.x + " this.mouse.y: " + this.mouse.y);
	
	if (this.mousedown == false || this.controlkey == false) {
		return;
	}
	
	this.controls.enabled = false;

	//console.info("Move " + this.mousedown);
	var vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
	
	projector = new THREE.Projector();
	vector =  projector.unprojectVector(vector, this.camera);

	var raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize());

	if (this.SELECTED) {
		var intersects = raycaster.intersectObject(this.plane);
				
		//this.SELECTED.position.copy(intersects[0].point.sub(this.offset));
		this.SELECTED.position.copy(intersects[0].point);
		
		console.info("Offst: " + this.offset.x + " " + this.offset.y );
		return;
	}

	/*var intersects = raycaster.intersectObjects(this.objects);

	if (intersects.length > 0) {
		if (this.INTERSECTED != intersects[0].object) {
			if (this.INTERSECTED) this.INTERSECTED.material.color.setHex(this.INTERSECTED.currentHex);

			this.INTERSECTED = intersects[0].object;
			this.INTERSECTED.currentHex = this.INTERSECTED.material.color.getHex();

			this.plane.position.copy(this.INTERSECTED.position);
			this.plane.lookAt(this.camera.position);
		}

	} else {
		if (this.INTERSECTED) this.INTERSECTED.material.color.setHex(this.INTERSECTED.currentHex);

		this.INTERSECTED = null;

	}*/
	
	this.controls.enabled = true;
};

ImageViewer.prototype.onDocumentMouseDown = function(event) {
	//only right button
	/*if (event.button !== 1) {
		return;
	}*/
	
	console.info("MouseDown");
	
	this.controls.enabled = false;
	
	this.mousedown = true;

	console.info("mouse.x " + this.mouse.x, this.mouse.y);
	
	//TODO auf aktuelles Fenster anpassen
	var vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
	
	console.info("vector.x " + vector.x + " vector.y " + vector.y);
	
	projector = new THREE.Projector();
	/*vector =  projector.unprojectVector(vector, this.camera);

	var raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize());*/

	projector.unprojectVector(vector, this.camera);   
	vector.sub(this.camera.position);                
	vector.normalize();
	var raycaster = new THREE.Raycaster(this.camera.position, vector);
	
	var intersects = raycaster.intersectObjects(this.scene.children, true);
	
	console.info("intersects: " + intersects.length);
	
	/*for (var b = 0; b < this.objects.length; b++) {
		console.info("Objects: " + this.objects[b].name);
	}*/

	if (intersects.length > 0) {
		//this.SELECTED = intersects[0].object;
		
		for (var b = 0; b < intersects.length; b++) {
			console.info("intersects[i]: " + intersects[b].object.name);
			
			if (intersects[b].object.name.indexOf("image") > -1) {
				this.SELECTED = intersects[b].object;
			}
		}
		
		console.info("Selected: " + this.SELECTED.name + " " + intersects.length + " " + this.objects.length);

		var intersects = raycaster.intersectObject(this.plane);
		
		if (this.controlkey) {
			this.offset.copy(intersects[0].point).sub(this.plane.position);
		}
	} else {
		this.SELECTED = null;
	}
	
	this.controls.enabled = true;
};

ImageViewer.prototype.onDocumentMouseUp = function(event) {
	event.preventDefault();
	
	//console.info("MouseUp");

	this.controls.enabled = true;
	
	this.mousedown = false;
	
	this.intersects = null;

	if (this.INTERSECTED) {

		//this.plane.position.copy(this.INTERSECTED.position);

		this.SELECTED = null;

	}
	
	this.INTERSECTED = null;
};

ImageViewer.prototype.getImageID = function(url) {
	var parts = url.split("/");
	
	return parts[parts.length - 2];
};

ImageViewer.prototype.getImageParentID = function(url) {
	var parts = url.split("/");
	
	return parts[parts.length - 3];
};

ImageViewer.prototype.getLayer = function(url) {
	var parts = url.split("/");
	
	return parts[parts.length - 4];
};

ImageViewer.prototype.externalClickEvent = function(externaldata) {	
	
	if (typeof externaldata === "undefined") {
		alert("Please wait. The system loads images.");
		return;
	}
	
	var imageID = this.getImageID(externaldata);
	var imageParentID = this.getImageParentID(externaldata);
	var layer = this.getLayer(externaldata);
	
	/*var obj;
	for (var i = 0; i < this.scene.children.length; i++) {
		obj = this.scene.children[i];
	    if (this.scene.children[i].name == "image") {
	    	//this.scene.remove(obj);

	    	//TODO Remove object
	    }
	}*/	
	
	var self = this;
	
	$.getJSON(this.imageServiceAdress + 'size/' + layer + "/" + imageParentID + "/" + imageID, function(data) {
		
		var imageTexture = new THREE.Texture(null);
		imageTexture.wrapS = imageTexture.wrapT = THREE.RepeatWrapping;
		imageTexture.repeat.set(1, 1);
		var img = new Image();
		img.crossOrigin = "use-credentials";
		img.onload = function() {
			imageTexture.image = img;
			imageTexture.needsUpdate = true;
		};
		img.src = externaldata;
		
		// var imageTexture = new THREE.ImageUtils.loadTexture(externaldata);
		// imageTexture.wrapS = imageTexture.wrapT = THREE.RepeatWrapping;
		// imageTexture.repeat.set(1, 1);
		var imageMaterial = new THREE.MeshBasicMaterial({ map: imageTexture, side: THREE.DoubleSide });
		var imageGeometry = new THREE.PlaneGeometry(data[0], data[1], 1, 1);
		var imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
		/*imageMesh.position.y = -0.5;
		imageMesh.rotation.x = Math.PI / 2;
		*/
		
		self.objects.push(imageMesh);
		
		var newPosition = self.scene.children.length;
		self.scene.add(imageMesh);
		self.imagecounter++;
		self.scene.children[newPosition].name = "image_" + self.imagecounter;
		
		console.info("Add " + self.scene.children[newPosition].name);
	});
	
	
};