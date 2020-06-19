import {expect} from 'chai';

describe('RIGISTRATION PAGE',()=> {
    before(() => {
        browser.maximizeWindow()
        browser.url('https://app.pasv.us/user/register')
    });

    it('should submit btn is clicbl', function () {
        expect($('[type="submit"]').isClickable()).eq(false)
    });

    it('should title is correct', function () {
        const actualText = $('h1').getText();
        const expectedText = "User Register";
        expect(actualText).eq(expectedText)
    });
    it('should populate firstname field', function () {
        const inputFirstName = $('[name="firstName"]');
        inputFirstName.setValue('Mariia');
        // const text = inputFirstName.getValue();
        // expect(text).eq('Mariia');
    });
    it('should input first name is valid', function () {
        const inputFirstName = $('[name="firstName"]');
        browser.keys('Tab')
        const res = inputFirstName.getAttribute('class')
        expect(res).contains('is-valid')


    });

    it('should fill out last name', function () {
        const inputLastName = $('[name="lastName"]');
        inputLastName.setValue('Shatalova');

    });

    it('should input first name is valid', function () {
        const inputLastName = $('[name="lastName"]');
        browser.keys('Tab')
        const res = inputLastName.getAttribute('class')
        expect(res).contains('is-valid')
    });

    it('should fill out email', function () {
        const inputLastName = $('[name="email"]');
        inputLastName.setValue('Shatalova@gmail.com');

    });

    it('should input email is valid', function () {
        const inputLastName = $('[name="email"]');
        browser.keys('Tab')
        const res = inputLastName.getAttribute('class')
        expect(res).contains('is-valid')
    });

    it('should fill out password', function () {
        const inputLastName = $('[name="password"]');
        inputLastName.setValue('123456');

    });

    it('should input password is valid', function () {
        const inputLastName = $('[name="password"]');
        browser.keys('Tab')
        const res = inputLastName.getAttribute('class')
        expect(res).contains('is-valid')
    });

    it('should submit btn is clicbl', function () {
        expect($('[type="submit"]').isClickable()).eq(true)
    });

});

