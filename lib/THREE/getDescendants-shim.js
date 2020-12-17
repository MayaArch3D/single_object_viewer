// Thanks to WestLangley: https://stackoverflow.com/a/25653415
THREE.Object3D.prototype.getDescendants = function ( array ) {
    if ( array === undefined ) array = [];

    Array.prototype.push.apply( array, this.children );

    for ( var i = 0, l = this.children.length; i < l; i ++ ) {
        this.children[ i ].getDescendants( array );
    }

    return array;
};

