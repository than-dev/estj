const colors = require('./colors')

class Logger {
    constructor(colors) {
        colors.forEach(({ color, value }) => {
            this[color] = (info) => {
                console.log(
                    `\x1b[${value}m%s\x1b[$0m`, info
                );
            }
        });
    }
}

const logger = new Logger(
    colors
)

module.exports = { logger }


