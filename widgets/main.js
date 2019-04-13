'use strict';

module.exports = {
  // register your ipc messages here
  messages: {
    'fill-parent' () {
      const selected = Editor.Selection.curSelection('node')
      if (!selected || selected.length === 0) {
          Editor.log("Could not find selected node.")
          return
      }
      Editor.log(`Sending ${selected} to scene script`)
      Editor.Scene.callSceneScript ('widgets', 'fill-parent', selected, function () {

      });

      // Editor.log("attemping to create fill widget on current selection")
      // Editor.log(`Selection found: ${selected}`)
      // const canvas = cc.find('Canvas')
      // Editor.log(`canvas: ${canvas}`)
    }
  },
};