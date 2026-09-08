describe('Open App Test Suite', () => {

    it('should launch the app', async () => {
        // Logika pengujian Anda
        console.log('Aplikasi berhasil dibuka');
        
        // Menambahkan wait/jeda selama 3 detik (3000 ms)
        await browser.pause(3000);
    });

    // Hook yang berjalan otomatis setelah seluruh 'it' block selesai
    after(async () => {
        // Menutup aplikasi secara spesifik berdasarkan package name
        await driver.terminateApp('com.saucelabs.mydemoapp.android');
    });

});