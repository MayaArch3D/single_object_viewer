# MayaArch3D Single Object Viewer

This 3D web GIS viewer was developed as part of the original MayaArch3D
project, deployed at
https://mayaarch3d.org/dev/examples/singleObjectViewer/sov.html.

As part of the Revitalizing MayaArch3D grants, its JavaScript libraries have
been updated where possible with minimal effort to maintain functionality and
deployed at https://mayaarch3d.org/single_object_viewer/

- GIScene
  - Updated to the 1.0.2 release
    https://github.com/GIScience/GIScene.js/tree/v1.0.2/builds
  - Updated and versioned as 1.0.3 alongside three.js updates below
    - `THREE.ParticleBasicMaterial` renamed `THREE.PointCloudMaterial`
    - `THREE.ParticleSystem` renamed `THREE.PointCloud`
    - `getPositionFromMatrix` renamed `setFromMatrixPosition`
    - Fix control deactivation to check `controls[i] !== undefined`
- jQuery
  - Updated to the latest version 3.5.1
- jQuery UI
  - Updated to the latest version 1.12.1 with some minor `css/ma3d.css` fixes
    for properly displaying button background icons
- three.js
  - Attempted updating to r98, after which the JSONLoader is removed from core
    as noted in https://github.com/mrdoob/three.js/wiki/Migration-Guide
    - Suggestions on how to keep using JSONLoader etc in
      https://github.com/mrdoob/three.js/pull/15310
    - There were errors and multiple other component renames communicated in the
      browser console
      - Initial errors were able to be resolved by including
        `/examples/js/renderers/Projector.js` and adding a shim for an internal
        three.js method which was removed according to
        https://stackoverflow.com/a/25653415 as
        `lib/THREE/getDescendants-shim.js`
      - Search/replace fixes were attempted but insufficient. Models rendered
        with lighting blown out and various warnings which could not be resolved
  - Attempted rolling back to versions corresponding to component renames by
    examining the wiki Migration Guide and
    [release notes](https://github.com/mrdoob/three.js/releases)
  - r70 restored proper lighting rendering, but the Measure feature was broken
  - r68 restored Meature functionality so this is the three.js version deployed
- MA3D
  - Updated and versioned as 0.0.5 alongside three.js update
    - `THREE.ParticleBasicMaterial` renamed `THREE.PointCloudMaterial`
    - `THREE.ParticleSystem` renamed `THREE.PointCloud`
