import spasm.types;

@safe:
nothrow:

alias ChangeCallback = extern(C) void delegate() nothrow;

struct Model {
  nothrow:
  JsHandle handle;
  this(Handle handle) { this.handle = JsHandle(handle); }
  auto get(alias field)() {
    return get!(typeof(field), __traits(identifier, field));
  }
  T get(T, string name)() @trusted if (is(T : int)) {
    return getModelInt(*handle.ptr, name);
  }
  void set(string name, T)(T value) @trusted if (is(T : int)) {
    setModelInt(*handle.ptr, name, value);
  }
  void saveChanges() @trusted {
    .saveChanges(*handle.ptr);
  }
  void on(string name, ChangeCallback cb) @trusted {
    onModelChange(*handle.ptr, name, cb);
  }
  static Model getInstance() {
    return Model(getModel());
  }
}

extern (C) Handle getModel();
extern (C) int getModelInt(Handle, string name);
extern (C) void setModelInt(Handle, string name, int value);
extern (C) void saveChanges(Handle);
extern (C) void onModelChange(Handle, string name, ChangeCallback cb);
