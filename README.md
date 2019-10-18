Spasm Jupyter Widget Example
===============================

A simple jupyter widget written in D and compiled to Webassembly.

It renders a simple '+' button, incrementing a counter.

In the IncrExample notebook it is linked together with a basic IntText Widget, with full 2 way data bindings.

- [source/bindings.d](https://github.com/skoppe/spasm-jupyter-widget-example/blob/master/source/bindings.d) contains the D bindings to the jupyter model.
- [source/app.d](https://github.com/skoppe/spasm-jupyter-widget-example/blob/master/source/app.d) contains a simple spasm application with 3 functions calling into the jupyter model bindinds functions.
- [js/lib/example.js](https://github.com/skoppe/spasm-jupyter-widget-example/blob/master/js/lib/example.js) contains generic javascript glue code which initialized the wasm instance. The functions in the `modelExports` correspond to the exports in the `bindings.d` file.
- [spasm_jupyter_widget_example/example.py](https://github.com/skoppe/spasm-jupyter-widget-example/blob/master/spasm_jupyter_widget_example/example.py) contains the python widget code.

The glue code and the bindings are very minimal, just enough for this example.

Installation
------------

To install use pip:

    $ pip3 install spasm_jupyter_widget_example
    $ jupyter nbextension enable --py --sys-prefix spasm_jupyter_widget_example

To install for jupyterlab

    $ jupyter labextension install spasm_jupyter_widget_example

For a development installation (requires npm),

    $ git clone https://github.com/skoppe/spasm_jupyter_widget_example.git
    $ cd spasm_jupyter_widget_example
    $ pip3 install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix spasm_jupyter_widget_example
    $ jupyter nbextension enable --py --sys-prefix spasm_jupyter_widget_example
    $ jupyter labextension install js

When actively developing your extension, build Jupyter Lab with the command:

    $ jupyter lab --watch

This take a minute or so to get started, but then allows you to hot-reload your javascript extension.
To see a change, save your javascript, watch the terminal for an update.

Note on first `jupyter lab --watch`, you may need to touch a file to get Jupyter Lab to open.

Development
-----------

Follow above development installation instructions.

Javascript/D changes are applied in the notebook when reloading the page (Ctrl-r).

Python changes require a restart of the kernel.
