import spasm.types;
import spasm.spa;
import spasm.css;
import bindings;

@safe:
nothrow:

mixin Spa!App;

struct ItemStyles {
  struct root {
    auto padding = "1em";
  }
}

@styleset!ItemStyles
struct App {
  nothrow:
  @style!"root" mixin Node!"button";
  @prop textContent = "+";
  int value = 0;
  Model model;
  void onMount() {
    this.model = Model.getInstance();
    this.model.on("change:value",&onChanged);
    onChanged();
  }
  @callback void onClick(MouseEvent) {
    value++;
    this.model.set!("value")(value);
    this.model.saveChanges();
  }
  extern(C) void onChanged() {
    value = this.model.get!(value);
  }
}
