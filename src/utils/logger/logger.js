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
            console.log(effect);
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


logger.reset('Testando')
logger.bright('Testando')
logger.dim('Testando')
logger.italic('Testando')
logger.underscore('Testando')
logger.blink('Testando')
logger.reverse('Testando')
logger.hidden('Testando')