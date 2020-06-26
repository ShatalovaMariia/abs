import {expect} from 'chai';

const login  = require("../login");

describe( 'CREATE DELIVERY',()=> {
    before(() => {
        login;
    });
    it('should verify usps logo is present', function () {
        const zakazDos = $('#usps-logo');
        const res = zakazDos.isDisplayed()
        expect(res).true
    });
    it('should select language', function () {
        const langDropDown = $('#slanguage');
        langDropDown.selectByVisibleText('English')
        browser.pause(1000)
    });
    it('should input username', function () {
        const userName = $('[name="tuserName"]');
        userName.setValue('Mariia Shat')


    });
    it('should input password ', function () {
        const passw = $('#tPassword');
        passw.setValue('123456')
    });
    it('should verify first question', function () {
        const firstQuest = $('#ssec1');
        firstQuest.selectByVisibleText('In what city were you born?');
    });
    it('should verify first question is selected', function () {
        const firstQuest = $('[id="o1"]');
        firstQuest.scrollIntoView();
        const result = firstQuest.isSelected();
        expect(result).true;
        browser.pause(2000)

    });
    it('should verify answer ', function () {
        const answer = $('#tsecAnswer1');
        answer.setValue('Moscow')
    });
    it('should ', function () {
        const secQuest = $('#ssec2');
        secQuest.selectByVisibleText('What is your favorite movie?');

    });

    // it('should verify first question is selected', function () {
    //     const secQuest = $('#s3o5');
    //     secQuest.scrollIntoView();
    //     const result = secQuest.isSelected();
    //     expect(result).true;
    //     browser.pause(2000)
    // });
});