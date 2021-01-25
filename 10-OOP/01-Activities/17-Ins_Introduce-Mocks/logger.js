function Logger() {
  // Here we add methods to the prototype once in a loop rather than writing them all out for each color
  if (!this.init) {
    Logger.prototype.init = true;

    const colors = {
      black: "\x1b[30m",
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
      white: "\x1b[37m"
    };

    for (const key in colors) {
      // Each color method calls console.log with the color as the first argument,followed by any additional arguments.
      Logger.prototype[key] = function(...args) {
        console.log(colors[key], ...args);
      };
    }
  }
}

module.exports = Logger;
