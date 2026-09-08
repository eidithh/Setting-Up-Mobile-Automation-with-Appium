exports.config = {
    runner: 'local',
    port: 4723,

    specs: [
        './test/app.test.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'B6AQVCKVRSLN4X6H',
        'appium:appPackage': 'com.saucelabs.mydemoapp.android',

        // Activity peluncur utama
        'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
        'appium:appWaitActivity': 'com.saucelabs.mydemoapp.android.view.activities.*',

        'appium:noReset': false,
        'appium:ignoreHiddenApiPolicyError': true
    }],

    logLevel: 'info',

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    services: ['appium']
};