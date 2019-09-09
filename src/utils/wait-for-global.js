function waitForGlobal(name, timeout = 300) {
  return new Promise((resolve, reject) => {
    let waited = 0;

    function wait(interval) {
      setTimeout(() => {
        waited += interval;
        if (window[name] && Object.entries(window[name]).length > 0) {
          return resolve();
        }

        if (waited >= timeout * 1000) {
          return reject(new Error('Timeout'));
        }
        wait(interval * 2);
        return null;
      }, interval);
    }

    wait(30);
  });
}

export default waitForGlobal;
