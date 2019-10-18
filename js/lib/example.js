var widgets = require('@jupyter-widgets/base');
import * as spasmModule from './spasm.js'
import * as spa from './spa.js'

const spasm = spasmModule.spasm;

export const HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'spasm_jupyter_widget_example',
        _view_module : 'spasm_jupyter_widget_example',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value: 3
    })
});

const modelExports = {
    env: {
        getModelInt: (ptr, len, off) => {
            return spasm.objects[ptr].get(spasmModule.decoders.string(len,off));
        },
        setModelInt: (ptr, len, off, value) => {
            spasm.objects[ptr].set(spasmModule.decoders.string(len, off), value);
        },
        saveChanges: (ptr) => {
            spasm.objects[ptr].save_changes();
        },
        onModelChange: (ptr, len, off, cbCtx, cbPtr) => {
            spasm.objects[ptr].on(spasmModule.decoders.string(len,off), ()=>spasm.instance.exports.__indirect_function_table.get(cbPtr)(cbCtx));
        }
    }
}

export const HelloView = widgets.DOMWidgetView.extend({
    render: function() {
        // NOTE: spasm by default comes with a getRoot function that behaves as a singleton
        // we have to override it to ensure spasm renders itself inside this widget's dom element
        const customGetRoot = () => spasm.addObject(this.el);
        const patchedSpaModule = {
            jsExports: {
                env: Object.assign(
                    {},
                    spa.jsExports.env,
                    modelExports.env,
                    {getRoot: customGetRoot, getModel: () => spasm.addObject(this.model)}
                )
            }
        };
        spasm.init([spasmModule,patchedSpaModule])
    }
});
