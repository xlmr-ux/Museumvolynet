function createCallbackManager() {
  let callbacks = new Set();

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

  function invokeWithCondition(condition, ...args) {
    callbacks.forEach((callback) => {
      const result = callback(...args);
      if (condition(result)) {
        // Invoke the callback only if the condition returns true
        callback(...args);
      }
    });
  }

  function getCallbackCount() {
    return callbacks.size;
  }

  return {
    add,
    remove,
    clear,
    invoke,
    invokeWithCondition,
    getCallbackCount,
  };
}
