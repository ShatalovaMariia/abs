 import {expect} from 'chai';
// const {expect} = require('chai');
//const expect = require('chai').expect


describe('Main Page', () =>{
    it('should title Progress Monitor present', function () {
        browser.url('https://stage.pasv.us/' )
        const mainTitle = $('[id="site-name"]').getText()
        expect(mainTitle).eq('Progress Monitor')

    });
    it('should  title on main page is clickable', function () {
        expect($('[id="site-name"]').isClickable()).eq(true);


    });
    it('should login button present', function () {
        expect($('[qa="login-link"]').getText()).eq('Login')
    });
    it('should verify login button is clickable', function () {
        expect($('[qa="login-link"]').isClickable()).eq(true)
        
    });

})