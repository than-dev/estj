#!/usr/bin/env node

const Runner = require('./runner')
const runner = new Runner()

const run = async () => {
    await runner.collectFiles();
    console.log(runner.testFiles);
}

run()

console.log('Running tests...');