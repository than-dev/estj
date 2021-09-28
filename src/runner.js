const fs = require('fs/promises');
const path = require('path');
const { logger } = require('./utils/colorful-logger/logger')

class Runner {
    constructor() {
        this.testFiles = []
    }

    async runTests() {
        for (let file of this.testFiles) {
            const beforeEaches = []

            global.beforeEach = (fn) => {
                beforeEaches.push(fn)
            }

            global.it = (description, fn) => {
                beforeEaches.forEach(async func => await func());

                try {
                    fn()
                    logger.green(`OK - ${description}`)
                } catch (error) {
                    logger.red(`X - ${desc}`);
                    logger.red('\t', error.message);
                }
            }

            try {
                require(file.name)
            } catch (error) {
                logger.red(`\t ${error}`);
            }
        }
    }

    async collectFiles(targetPath = process.cwd()) {
        const files = await fs.readdir(targetPath)

        for (let file of files) {
            const filepath = path.join(targetPath, file)
            const stats = await fs.lstat(filepath)

            if (stats.isFile() && file.includes('.test.js')) {
                this.testFiles.push({ name: filepath })
            } else if (stats.isDirectory()) {
                const childFiles = await fs.readdir(filepath)

                files.push(...childFiles.map(childFile => path.join(file, childFile)))
            }
        }
    }
}

module.exports = Runner