export function debounce(fn, ms, shouldRunFirst = true, shouldRunLast = true) {
  let waitingTimeout;

  return (...args) => {
    if (waitingTimeout) {
      clearTimeout(waitingTimeout);
      waitingTimeout = undefined;
    } else if (shouldRunFirst) {
      fn(...args);
    }

    waitingTimeout = setTimeout(() => {
      if (shouldRunLast) {
        fn(...args);
      }

      waitingTimeout = undefined;
    }, ms);
  };
}

export function throttle(fn, ms, shouldRunFirst = true) {
  let interval;
  let isPending;
  let args;

  return (..._args) => {
    isPending = true;
    args = _args;

    if (!interval) {
      if (shouldRunFirst) {
        isPending = false;
        fn(...args);
      }

      interval = setInterval(() => {
        if (!isPending) {
          clearInterval(interval);
          interval = undefined;
          return;
        }

        isPending = false;
        fn(...args);
      }, ms);
    }
  };
}

export function throttleWithTickEnd(fn) {
  return throttleWith(onTickEnd, fn);
}

export function throttleWith(schedulerFn, fn) {
  let waiting = false;
  let args;

  return (..._args) => {
    args = _args;

    if (!waiting) {
      waiting = true;

      schedulerFn(() => {
        waiting = false;
        fn(...args);
      });
    }
  };
}

export function onIdle(cb, timeout) {
  if (self.requestIdleCallback) {
    self.requestIdleCallback(cb, { timeout });
  } else {
    onTickEnd(cb);
  }
}

export const pause = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export function rafPromise() {
  return new Promise((resolve) => {
    fastRaf(resolve);
  });
}

const FAST_RAF_TIMEOUT_FALLBACK_MS = 35; // < 30 FPS

let fastRafCallbacks;
let fastRafFallbackCallbacks;
let fastRafFallbackTimeout;

export function fastRaf(callback, withTimeoutFallback = false) {
  if (!fastRafCallbacks) {
    fastRafCallbacks = new Set([callback]);

    requestAnimationFrame(() => {
      const currentCallbacks = fastRafCallbacks;

      fastRafCallbacks = undefined;
      fastRafFallbackCallbacks = undefined;

      if (fastRafFallbackTimeout) {
        clearTimeout(fastRafFallbackTimeout);
        fastRafFallbackTimeout = undefined;
      }

      currentCallbacks.forEach((cb) => cb());
    });
  } else {
    fastRafCallbacks.add(callback);
  }

  if (withTimeoutFallback) {
    if (!fastRafFallbackCallbacks) {
      fastRafFallbackCallbacks = new Set([callback]);
    } else {
      fastRafFallbackCallbacks.add(callback);
    }

    if (!fastRafFallbackTimeout) {
      fastRafFallbackTimeout = window.setTimeout(() => {
        const currentTimeoutCallbacks = fastRafFallbackCallbacks;

        if (fastRafCallbacks) {
          currentTimeoutCallbacks.forEach(
            fastRafCallbacks.delete,
            fastRafCallbacks
          );
        }
        fastRafFallbackCallbacks = undefined;

        if (fastRafFallbackTimeout) {
          clearTimeout(fastRafFallbackTimeout);
          fastRafFallbackTimeout = undefined;
        }

        currentTimeoutCallbacks.forEach((cb) => cb());
      }, FAST_RAF_TIMEOUT_FALLBACK_MS);
    }
  }
}

let onTickEndCallbacks;

export function onTickEnd(callback) {
  if (!onTickEndCallbacks) {
    onTickEndCallbacks = [callback];

    Promise.resolve().then(() => {
      const currentCallbacks = onTickEndCallbacks;
      onTickEndCallbacks = undefined;
      currentCallbacks.forEach((cb) => cb());
    });
  } else {
    onTickEndCallbacks.push(callback);
  }
}

let beforeUnloadCallbacks;

export function onBeforeUnload(callback, isLast = false) {
  if (!beforeUnloadCallbacks) {
    beforeUnloadCallbacks = [];
    self.addEventListener("beforeunload", () => {
      beforeUnloadCallbacks.forEach((cb) => cb());
    });
  }

  if (isLast) {
    beforeUnloadCallbacks.push(callback);
  } else {
    beforeUnloadCallbacks.unshift(callback);
  }

  return () => {
    beforeUnloadCallbacks = beforeUnloadCallbacks.filter(
      (cb) => cb !== callback
    );
  };
}
