module.exports = {
    'Demo test Google' : function (client) {
      client
        .url('https://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        //.assert.visible('input[type=text]')
        .setValue('#APjFqb', 'rembrandt van rijn')
        .waitForElementVisible('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b', 1000)
        .click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b')
        .pause(1000)
    }
};