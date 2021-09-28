const fs = require('fs/promises');
const path = require('path');

class Runner {
    constructor() {
        this.files = []
    }

    async collectFiles(targetPath = path.join('.')) {
        const files = await fs.readdir(targetPath)

        return files
    }
}

module.exports = Runner