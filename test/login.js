describe('duckduckgo example', function() {
    it('Search Nightwatch.js and check results', function(browser) {
      browser
        .navigateTo('https://portal.dev.gmint.io/#/')
        .waitForElementVisible('input[type="text"]')
        .sendKeys('input[type="text"]', ['rgsctest+xyzr@gmail.com'])
        .sendKeys('input[type="password"]', ['@Welcome1234'])
        .click('*[type="submit"]')
        .pause(5000)
        .assert.visible('h1')
        .assert.textContains('h5', 'Dashboard')
        .assert.textContains('h5', 'Dashboard')

        .assert.textContains('h1', 'Dashboard');
    }); 
  });