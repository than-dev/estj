const {
    colors,
    effects
} = require('./colors')

class Logger {
    constructor(colors, effects) {
        colors.forEach(({ color, value }) => {
            this[color] = (info) => {
                console.log(
                    `\x1b[${value}m%s\x1b[0m`, info,
                    '\n'
                );
            }
        });

        effects.forEach(({ effect, value }) => {
            this[effect] = (info) => {
                console.log(
                    `\x1b[${value}m%s\x1b[0m`, info,
                    '\n'
                );
            }
        });
    }
}

const logger = new Logger(
    colors,
    effects
)

module.exports = { logger }