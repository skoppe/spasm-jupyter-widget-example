var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'spasm_jupyter_widget_example',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'spasm_jupyter_widget_example',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

