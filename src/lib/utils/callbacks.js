function createCallbackManager() {
  const callbacks = new Set();

  function add(callback) {
    callbacks.add(callback);

    return () => {
      remove(callback);
    };
  }

  function remove(callback) {
    callbacks.delete(callback);
  }

  function clear() {
    callbacks.clear();
  }

  function invoke(...args) {
    callbacks.forEach((callback) => callback(...args));
  }

  function getCallbackCount() {
    return callbacks.size;
  }

  return {
    add,
    remove,
    clear,
    invoke,
    getCallbackCount,
  };
}
