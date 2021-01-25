const Logger = require("./logger");

const log = new Logger();

log.red("We can write to the console in different colors!");

log.blue("We just need to provide an additional argument to the console.log method!");

log.magenta("The first argument console.log needs is an 'ANSI Escape Code'");

log.green("You can look these up at https://en.wikipedia.org/wiki/ANSI_escape_code#Colors");

log.yellow("But they're just codes that represent different colors");

log.cyan("The second argument console.log should receive is the message to be printed");
