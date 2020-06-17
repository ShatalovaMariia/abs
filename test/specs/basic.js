describe('Main Page', () =>{
    it('should title Progress Monitor present', function () {
        browser.url('https://stage.pasv.us/' )
        const mainTitle = $('[id="site-name"]').getText()
        expect(mainTitle).toEqual('Progress Monitor')

    });
    it('should  title on main page is clickable', function () {
        expect($('[id="site-name"]').isClickable()).toEqual(true);


    });
    it('should login button present', function () {
        expect($('[qa="login-link"]').getText()).toEqual('Login')
    });
})