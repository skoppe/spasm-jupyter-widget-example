import ipywidgets as widgets
from traitlets import Unicode,Int

@widgets.register
class IncrButton(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('HelloView').tag(sync=True)
    _model_name = Unicode('HelloModel').tag(sync=True)
    _view_module = Unicode('spasm_jupyter_widget_example').tag(sync=True)
    _model_module = Unicode('spasm_jupyter_widget_example').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
    value = Int(0).tag(sync=True)
