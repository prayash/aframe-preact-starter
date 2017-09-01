/**
 * @fileoverview 
 * This is our custom A-Frame component.
 * It is responsible for adding the outer wireframe mesh
 * and nodes to its vertices.
 */

AFRAME.registerComponent('lowpoly', {
  schema: {},

  init: function() {
    // Get the ref of the object to which the component is attached
    const obj = this.el.getObject3D('mesh')

    // Grab the reference to the main WebGL scene
    const scene = document.querySelector('a-scene').object3D
  },

  update: function() {
    // Get the ref of the object to which the component is attached
    const obj = this.el.getObject3D('mesh')
  }
})
