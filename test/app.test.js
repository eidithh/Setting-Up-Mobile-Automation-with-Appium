describe('Open App Test Suite', () => {

    it('should launch the app, open menu, login, and verify successful login', async () => {

        console.log('Aplikasi berhasil dibuka');

       // 1. Klik hamburger menu
        const menuBtn = await $('id=com.saucelabs.mydemoapp.android:id/menuIV');
        await menuBtn.waitForDisplayed({ timeout: 10000 });
        await menuBtn.click();

        // Jeda 1 detik agar animasi drawer menu terbuka sempurna
        await browser.pause(1000);

        // 2. Klik menu Log In menggunakan XPath dari Inspector
        const menuItemLogin = await $('//android.widget.TextView[@content-desc="Login Menu Item"]');
        await menuItemLogin.waitForDisplayed({ timeout: 10000 });
        await menuItemLogin.click();

        // 3. Assertion: Validasi Title Halaman Login
        const loginTitle = await $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/loginTV"]');
        await loginTitle.waitForDisplayed({ timeout: 10000 });
        await expect(loginTitle).toBeDisplayed();

        // 4. Input Username
        const usernameField = await $('id=com.saucelabs.mydemoapp.android:id/nameET');
        await usernameField.waitForDisplayed({ timeout: 10000 });
        await usernameField.setValue('bod@example.com');

        // 5. Input Password
        const passwordField = await $('id=com.saucelabs.mydemoapp.android:id/passwordET');
        await passwordField.waitForDisplayed({ timeout: 10000 });
        await passwordField.setValue('10203040');

        // 6. Klik Tombol Login
        const loginBtn = await $('id=com.saucelabs.mydemoapp.android:id/loginBtn');
        await loginBtn.waitForDisplayed({ timeout: 10000 });
        await loginBtn.click();

        console.log('Login button berhasil diklik');

        // 7. Assertion: Validasi Halaman Products Tampil
        const productsTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV');
        await productsTitle.waitForDisplayed({ timeout: 10000 });
        await expect(productsTitle).toBeDisplayed();

        console.log('ASSERT: Login berhasil, halaman Products tampil');
    });

    after(async () => {
        await driver.terminateApp('com.saucelabs.mydemoapp.android');
    });
});