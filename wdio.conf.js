exports.config = {
    runner: 'local',

    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    specs: ['./test/**/*.js'],

    maxInstances: 1,

    capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'B6AQVCKVRSLN4X6H',
    'appium:appPackage': 'com.saucelabs.mydemoapp.android',
   
    'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
  
    'appium:appWaitActivity': 'com.saucelabs.mydemoapp.android.view.activities.*',
    'appium:ignoreHiddenApiPolicyError': true
    }],
    

    services: ['appium'],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results'
        }]
    ],
    mochaOpts: {
        timeout: 60000
    }
};