/* eslint-disable no-console */

const chalk = require('chalk')
const ip = require('ip')

const divider = chalk.gray('\n---\n')

/**
 * Logger middleware
 */
const logger = {
  // Called whenever there's an error on the server we want to print
  error: err => {
    console.error(chalk.red(err))
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server started ${chalk.green('+')}`)

    // If the tunnel started, log that and the URL it's available at
    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green('+')}`)
    }

    console.log(`${chalk.bold('Access URLs:')}${divider}`+
      'Localhost: ' + chalk.magenta(`http://${host}`) +
      '\nLAN: ' + chalk.magenta(`http://${ip.address()}:${port}`) +
      (tunnelStarted
        ? `\nProxy: ${chalk.magenta(tunnelStarted)}`
        : '') +
      ` ${divider}` +
      chalk.blue(`\nPress ${chalk.italic('CTRL-C')} to stop`) )
  }
}

module.exports = logger
