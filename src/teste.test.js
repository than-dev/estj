const assert = require('assert')

it('should has a text input', async () => {
    const dom = await render('/webapp-example/index.html')

    const input = dom.window.document.querySelector('input')

    assert(input)
})