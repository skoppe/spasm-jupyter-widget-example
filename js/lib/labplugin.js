var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'spasm-jupyter-widget-example',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'spasm-jupyter-widget-example',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

