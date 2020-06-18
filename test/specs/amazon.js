import {expect} from 'chai';
//const expect = require('chai').expect

describe( 'Regisrer page',() => {

    it('should ', function () {
        browser.url('https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0& ')
        const text = browser.getTitle();
        expect(text).eq('Amazon Registration')


    });
    it('should  have create account text on the page', function () {
        const createAccountText = $('h1').getText();
        expect(createAccountText).eq('Create account');
    });
    it('should have your name text on the page', function () {
        const yourName = $('[for="ap_customer_name"]').getText()
        expect(yourName).eq('Your name');

    });
    it('should input name in your name field', function () {
        const yourNameInput = $('#ap_customer_name');
        yourNameInput.setValue('Mariia Shatalova')
        browser.pause(3000)
        const text = yourNameInput.getValue()
        expect(text).eq('Mariia Shatalova')
    });
    it('verify that email text =  Email', function () {
        const eMail = $('[for="ap_email"]');
        const text = eMail.getText();
        expect(text).eq('Email')

    });
    it('should input email in email input  ', function () {
        const  eMailInput = $('#ap_email');
        eMailInput.setValue('shatomasho@gmail.com');
        const text = eMailInput.getValue();
        expect(text).eq('shatomasho@gmail.com');
    });
    it('should verify password label is correct', function () {
        const passLabel = $('[for="ap_password"]');
        const text = passLabel.getText()
        expect(text).eq("Password");
        browser.pause(2000)
    });
    it('should verify input Password in password input ', function () {
        const passwordInput = $('#ap_password');
        passwordInput.setValue('123456')
        const text = passwordInput.getValue()
        expect(text).eq('123456')

    });
    it('should verify "i" button is present ', function () {
        const iButton = $('//div[@class="a-box a-alert-inline a-alert-inline-info auth-inlined-information-message a-spacing-top-mini"]/div/i');
        const result = iButton.isDisplayed();
        expect(result).eq(true)
    });
});
